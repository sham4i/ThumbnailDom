// Stripe configuration and helper functions
export const STRIPE_PRICE_IDS = {
  TEST_DRIVE: 'price_1RbGDbGjGTuZA421O6m30oGB',
  CREATOR_PRO_MONTHLY: 'price_1RawbxGjGTuZA421cdNpCO5f',
  CREATOR_PRO_PLUS_MONTHLY: 'price_1RawcnGjGTuZA421VS3uLVxq',
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
      return STRIPE_PRICE_IDS.CREATOR_PRO_MONTHLY;
    case 'creator-pro-plus':
      return STRIPE_PRICE_IDS.CREATOR_PRO_PLUS_MONTHLY;
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
    billing_cycle: 'monthly',
  };

  switch (serviceType) {
    case 'test-drive':
      metadata.service_name = 'Packaging Test';
      metadata.packaging_count = '1';
      break;
    case 'creator-pro':
      metadata.service_name = 'Creator Plan';
      metadata.packaging_count = '5';
      break;
    case 'creator-pro-plus':
      metadata.service_name = 'Growth Plan';
      metadata.packaging_count = '10';
      break;
  }

  return metadata;
}