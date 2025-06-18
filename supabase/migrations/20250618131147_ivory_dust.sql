/*
  # Create RPC function for order details retrieval

  1. New Function
    - `get_order_details_by_session_id` - Securely retrieves order details by Stripe session ID
  
  2. Security
    - Uses SECURITY DEFINER to bypass RLS for this specific function
    - Grants execution permission to anon role for unauthenticated access
    - Only returns data for the specific session ID provided
  
  3. Purpose
    - Allows success page to display order details without requiring user authentication
    - Maintains security by only exposing order data via session ID
*/

CREATE OR REPLACE FUNCTION public.get_order_details_by_session_id(session_id text)
RETURNS SETOF public.orders
LANGUAGE plpgsql
SECURITY DEFINER -- This allows the function to bypass RLS for the SELECT statement inside it
AS $function$
BEGIN
  RETURN QUERY SELECT * FROM public.orders WHERE stripe_session_id = session_id;
END;
$function$;

-- Grant execution to the anon role so your frontend can call it
GRANT EXECUTE ON FUNCTION public.get_order_details_by_session_id(text) TO anon;