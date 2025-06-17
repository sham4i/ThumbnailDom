import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
}

interface CheckoutRequest {
  priceId: string
  mode: 'payment' | 'subscription'
  successUrl: string
  cancelUrl: string
  customerEmail?: string
  metadata?: Record<string, string>
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
      return new Response(
        JSON.stringify({ error: "Method not allowed" }),
        {
          status: 405,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      )
    }

    // Get Stripe secret key from environment
    const stripeSecretKey = Deno.env.get("STRIPE_SECRET_KEY")
    if (!stripeSecretKey) {
      throw new Error("Stripe secret key not configured")
    }

    // Parse request body
    const { priceId, mode, successUrl, cancelUrl, customerEmail, metadata }: CheckoutRequest = await req.json()

    // Validate required fields
    if (!priceId || !mode || !successUrl || !cancelUrl) {
      return new Response(
        JSON.stringify({ error: "Missing required fields: priceId, mode, successUrl, cancelUrl" }),
        {
          status: 400,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      )
    }

    // Validate mode
    if (mode !== 'payment' && mode !== 'subscription') {
      return new Response(
        JSON.stringify({ error: "Invalid mode. Must be 'payment' or 'subscription'" }),
        {
          status: 400,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      )
    }

    // Create Stripe checkout session
    const stripeResponse = await fetch("https://api.stripe.com/v1/checkout/sessions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${stripeSecretKey}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        "mode": mode,
        "line_items[0][price]": priceId,
        "line_items[0][quantity]": "1",
        "success_url": successUrl,
        "cancel_url": cancelUrl,
        "payment_method_types[0]": "card",
        "billing_address_collection": "required",
        ...(customerEmail && { "customer_email": customerEmail }),
        ...(metadata && Object.entries(metadata).reduce((acc, [key, value], index) => {
          acc[`metadata[${key}]`] = value
          return acc
        }, {} as Record<string, string>)),
      }),
    })

    if (!stripeResponse.ok) {
      const errorData = await stripeResponse.text()
      console.error("Stripe API error:", errorData)
      throw new Error(`Stripe API error: ${stripeResponse.status}`)
    }

    const session = await stripeResponse.json()

    return new Response(
      JSON.stringify({
        sessionId: session.id,
        url: session.url,
      }),
      {
        status: 200,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    )

  } catch (error) {
    console.error("Error creating checkout session:", error)
    
    return new Response(
      JSON.stringify({
        error: error.message || "Internal server error",
      }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    )
  }
})