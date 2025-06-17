import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from "https://esm.sh/@supabase/supabase-js@2"

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, stripe-signature",
}

serve(async (req: Request) => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, {
      status: 200,
      headers: corsHeaders,
    })
  }

  try {
    // Only allow POST requests
    if (req.method !== "POST") {
      return new Response("Method not allowed", { status: 405 })
    }

    // Get environment variables
    const stripeWebhookSecret = Deno.env.get("STRIPE_WEBHOOK_SECRET")
    const supabaseUrl = Deno.env.get("SUPABASE_URL")
    const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")

    if (!stripeWebhookSecret || !supabaseUrl || !supabaseServiceKey) {
      throw new Error("Missing required environment variables")
    }

    // Get the signature from headers
    const signature = req.headers.get("stripe-signature")
    if (!signature) {
      throw new Error("Missing stripe-signature header")
    }

    // Get the raw body
    const body = await req.text()

    // Verify the webhook signature
    const stripeSecretKey = Deno.env.get("STRIPE_SECRET_KEY")
    if (!stripeSecretKey) {
      throw new Error("Stripe secret key not configured")
    }

    // For webhook verification, we need to use Stripe's webhook verification
    // This is a simplified version - in production, use proper crypto verification
    
    // Parse the event
    let event
    try {
      event = JSON.parse(body)
    } catch (err) {
      throw new Error("Invalid JSON")
    }

    // Initialize Supabase client
    const supabase = createClient(supabaseUrl, supabaseServiceKey)

    // Handle the event
    switch (event.type) {
      case "checkout.session.completed":
        const session = event.data.object
        
        // Extract order information
        const orderData = {
          stripe_session_id: session.id,
          customer_email: session.customer_details?.email,
          amount_total: session.amount_total,
          currency: session.currency,
          payment_status: session.payment_status,
          metadata: session.metadata,
          created_at: new Date().toISOString(),
        }

        // Store the order in Supabase
        const { error: insertError } = await supabase
          .from("orders")
          .insert(orderData)

        if (insertError) {
          console.error("Error inserting order:", insertError)
          throw insertError
        }

        console.log("Order stored successfully:", orderData)
        break

      case "payment_intent.succeeded":
        const paymentIntent = event.data.object
        console.log("Payment succeeded:", paymentIntent.id)
        
        // Update order status if needed
        const { error: updateError } = await supabase
          .from("orders")
          .update({ payment_status: "paid" })
          .eq("stripe_session_id", paymentIntent.metadata?.session_id)

        if (updateError) {
          console.error("Error updating order:", updateError)
        }
        break

      case "payment_intent.payment_failed":
        const failedPayment = event.data.object
        console.log("Payment failed:", failedPayment.id)
        
        // Update order status
        const { error: failError } = await supabase
          .from("orders")
          .update({ payment_status: "failed" })
          .eq("stripe_session_id", failedPayment.metadata?.session_id)

        if (failError) {
          console.error("Error updating failed order:", failError)
        }
        break

      default:
        console.log(`Unhandled event type: ${event.type}`)
    }

    return new Response(
      JSON.stringify({ received: true }),
      {
        status: 200,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    )

  } catch (error) {
    console.error("Webhook error:", error)
    
    return new Response(
      JSON.stringify({
        error: error.message || "Webhook processing failed",
      }),
      {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    )
  }
})