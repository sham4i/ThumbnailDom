// Stripe configuration and helper functions
export const STRIPE_PRICE_IDS = {
  STARTER_AUDIT: 'price_1RbGDbGjGTuZA421O6m30oGB',
  CREATOR_PACKAGING_MONTHLY: 'price_1RawbxGjGTuZA421cdNpCO5f',
  GROWTH_SYSTEM_MONTHLY: 'price_1RawcnGjGTuZA421VS3uLVxq',
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
    case 'starter-audit':
      return STRIPE_PRICE_IDS.STARTER_AUDIT;
    case 'creator-pro':
      return STRIPE_PRICE_IDS.CREATOR_PACKAGING_MONTHLY;
    case 'creator-pro-plus':
      return STRIPE_PRICE_IDS.GROWTH_SYSTEM_MONTHLY;
    default:
      throw new Error(`Unknown service type: ${serviceType}`);
  }
}

export function getCheckoutMode(serviceType: string): 'payment' | 'subscription' {
  switch (serviceType) {
    case 'starter-audit':
      return 'payment';
    case 'creator-pro':
    case 'creator-pro-plus':
      return 'subscription';
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
    case 'starter-audit':
      metadata.service_name = 'Starter Audit';
      metadata.thumbnail_count = '3';
      metadata.delivery_time = '48 hours per thumbnail';
      break;
    case 'creator-pro':
      metadata.service_name = 'Creator Packaging';
      metadata.thumbnail_count = '4';
      metadata.delivery_time = '48 hours';
      break;
    case 'creator-pro-plus':
      metadata.service_name = 'Growth System';
      metadata.thumbnail_count = '8';
      metadata.includes_visual_system = 'true';
      break;
  }

  return metadata;
}