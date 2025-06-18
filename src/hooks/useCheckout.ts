import { useState } from 'react';
import { createCheckoutSession, getPriceId, getServiceMetadata, getCheckoutMode } from '@/lib/stripe';
import { useToast } from '@/hooks/use-toast';

interface UseCheckoutParams {
  serviceType: string;
  isAnnual?: boolean;
  customerEmail?: string;
}

export function useCheckout() {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const initiateCheckout = async ({ serviceType, isAnnual = false, customerEmail }: UseCheckoutParams) => {
    if (serviceType === 'enterprise') {
      // Enterprise requires custom consultation
      window.location.href = '/contact?service=enterprise';
      return;
    }

    setIsLoading(true);

    try {
      const priceId = getPriceId(serviceType, isAnnual);
      const mode = getCheckoutMode(serviceType);
      const metadata = getServiceMetadata(serviceType, isAnnual);

      const currentUrl = window.location.origin;
      
      // Capture the current page path and encode it for safe URL transmission
      const currentPath = window.location.pathname;
      const encodedReturnPath = encodeURIComponent(currentPath);
      
      // Include the return path in both success and cancel URLs
      const successUrl = `${currentUrl}/success?session_id={CHECKOUT_SESSION_ID}&return_path=${encodedReturnPath}`;
      const cancelUrl = `${currentUrl}${currentPath}?canceled=true`;

      const { url } = await createCheckoutSession({
        priceId,
        mode,
        successUrl,
        cancelUrl,
        customerEmail,
        metadata,
      });

      // Redirect to Stripe Checkout
      window.location.href = url;
    } catch (error) {
      console.error('Checkout error:', error);
      toast({
        title: 'Checkout Error',
        description: error instanceof Error ? error.message : 'Failed to start checkout process',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return {
    initiateCheckout,
    isLoading,
  };
}