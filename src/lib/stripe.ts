// Stripe configuration and helper functions
export const STRIPE_PRICE_IDS = {
  TEST_DRIVE: 'price_1RbGDbGjGTuZA421O6m30oGB', // Replace with actual Stripe price ID
  CREATOR_PRO_MONTHLY: 'price_1RawbxGjGTuZA421cdNpCO5f', // Replace with actual Stripe price ID
  CREATOR_PRO_ANNUAL: 'price_1RawbxGjGTuZA4212k6j9q3D', // Replace with actual Stripe price ID (247 * 12 * 0.9)
  CREATOR_PRO_PLUS_MONTHLY: 'price_1RawcnGjGTuZA421VS3uLVxq', // Replace with actual Stripe price ID
  CREATOR_PRO_PLUS_ANNUAL: 'price_1RawcnGjGTuZA421kV0lqQuo', // Replace with actual Stripe price ID (447 * 12 * 0.85)
} as const;

export interface CreateCheckoutSessionParams {
  priceId: string;
  mode: 'payment' | 'subscription';
  successUrl: string;
  cancelUrl: string;
  customerEmail?: string;
  metadata?: Record<string, string>;
}

export interface CheckoutSessionResponse {
  sessionId: string;
  url: string;
}

export async function createCheckoutSession(
  params: CreateCheckoutSessionParams
): Promise<CheckoutSessionResponse> {
  const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
  
  if (!supabaseUrl) {
    throw new Error('Supabase URL not configured');
  }

  const response = await fetch(`${supabaseUrl}/functions/v1/stripe-checkout`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
    },
    body: JSON.stringify(params),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.error || 'Failed to create checkout session');
  }

  return response.json();
}

export function getPriceId(serviceType: string, isAnnual: boolean = false): string {
  switch (serviceType) {
    case 'test-drive':
      return STRIPE_PRICE_IDS.TEST_DRIVE;
    case 'creator-pro':
      return isAnnual ? STRIPE_PRICE_IDS.CREATOR_PRO_ANNUAL : STRIPE_PRICE_IDS.CREATOR_PRO_MONTHLY;
    case 'creator-pro-plus':
      return isAnnual ? STRIPE_PRICE_IDS.CREATOR_PRO_PLUS_ANNUAL : STRIPE_PRICE_IDS.CREATOR_PRO_PLUS_MONTHLY;
    default:
      throw new Error(`Unknown service type: ${serviceType}`);
  }
}

export function getCheckoutMode(serviceType: string): 'payment' | 'subscription' {
  switch (serviceType) {
    case 'test-drive':
      return 'payment'; // One-time payment
    case 'creator-pro':
    case 'creator-pro-plus':
      return 'subscription'; // Recurring subscription
    default:
      throw new Error(`Unknown service type: ${serviceType}`);
  }
}

export function getServiceMetadata(serviceType: string, isAnnual: boolean = false) {
  const metadata: Record<string, string> = {
    service_type: serviceType,
    billing_cycle: isAnnual ? 'annual' : 'monthly',
  };

  switch (serviceType) {
    case 'test-drive':
      metadata.service_name = 'Test Drive - Single Design';
      metadata.thumbnail_count = '1';
      break;
    case 'creator-pro':
      metadata.service_name = 'Creator Pro Monthly Retainer';
      metadata.thumbnail_count = '5';
      break;
    case 'creator-pro-plus':
      metadata.service_name = 'Creator Pro+ Premium Retainer';
      metadata.thumbnail_count = '10';
      break;
  }

  return metadata;
}