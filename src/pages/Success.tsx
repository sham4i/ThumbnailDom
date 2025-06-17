import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { createClient } from '@supabase/supabase-js';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, ArrowRight, Mail, Calendar, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

// Initialize Supabase client
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

const supabase = supabaseUrl && supabaseAnonKey 
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;

interface OrderDetails {
  id: string;
  stripe_session_id: string;
  customer_email: string;
  amount_total: number;
  currency: string;
  payment_status: string;
  metadata: any;
  created_at: string;
}

const Success = () => {
  const [searchParams] = useSearchParams();
  const sessionId = searchParams.get('session_id');
  const [orderDetails, setOrderDetails] = useState<OrderDetails | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchOrderDetails = async () => {
      // Check if Supabase is configured
      if (!supabase) {
        setError('Supabase configuration missing. Please check your environment variables.');
        setIsLoading(false);
        return;
      }

      // Check if session ID exists
      if (!sessionId) {
        setError('No session ID found in URL. Please check your payment confirmation.');
        setIsLoading(false);
        return;
      }

      try {
        // Query the orders table for the matching session ID
        const { data, error: supabaseError } = await supabase
          .from('orders')
          .select('*')
          .eq('stripe_session_id', sessionId)
          .single(); // Use single() since we expect only one order per session

        if (supabaseError) {
          console.error('Supabase error:', supabaseError);
          setError('Failed to fetch order details. Please contact support if this persists.');
          setIsLoading(false);
          return;
        }

        if (!data) {
          setError('Order not found. Please contact support with your session ID.');
          setIsLoading(false);
          return;
        }

        setOrderDetails(data);
        setIsLoading(false);
      } catch (err) {
        console.error('Error fetching order details:', err);
        setError('An unexpected error occurred. Please contact support.');
        setIsLoading(false);
      }
    };

    fetchOrderDetails();
  }, [sessionId]);

  // Helper function to format price
  const formatPrice = (amountInCents: number, currency: string = 'usd') => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currency.toUpperCase(),
    }).format(amountInCents / 100);
  };

  // Helper function to get service name from metadata
  const getServiceName = (metadata: any) => {
    if (metadata?.service_name) {
      return metadata.service_name;
    }
    if (metadata?.service_type) {
      switch (metadata.service_type) {
        case 'test-drive':
          return 'Test Drive - Single Design';
        case 'creator-pro':
          return 'Creator Pro Monthly Retainer';
        case 'creator-pro-plus':
          return 'Creator Pro+ Premium Retainer';
        case 'enterprise':
          return 'Enterprise Custom Solution';
        default:
          return 'Thumbnail Design Service';
      }
    }
    return 'Thumbnail Design Service';
  };

  // Generate order number from ID
  const getOrderNumber = (id: string) => {
    return `TDA-${id.slice(-8).toUpperCase()}`;
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="pt-24 pb-16">
          <div className="container mx-auto px-4 text-center">
            <div className="animate-pulse">
              <div className="h-8 bg-muted rounded w-1/3 mx-auto mb-4"></div>
              <div className="h-4 bg-muted rounded w-1/2 mx-auto mb-8"></div>
              <div className="h-32 bg-muted rounded w-full max-w-md mx-auto"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="pt-24 pb-16">
          <div className="container mx-auto px-4 max-w-2xl">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <AlertCircle className="h-8 w-8 text-red-600" />
              </div>
              <h1 className="text-3xl font-bold text-foreground mb-2">Something went wrong</h1>
              <p className="text-lg text-muted-foreground mb-4">
                {error}
              </p>
              {sessionId && (
                <p className="text-sm text-muted-foreground">
                  Session ID: {sessionId}
                </p>
              )}
            </div>

            <div className="text-center space-y-4">
              <Button size="lg" asChild>
                <Link to="/contact">
                  Contact Support <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <div>
                <Link 
                  to="/" 
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Return to Home
                </Link>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
            <h1 className="text-3xl font-bold text-foreground mb-2">Payment Successful!</h1>
            <p className="text-lg text-muted-foreground">
              Thank you for choosing Thumb Domination Agency. Your order has been confirmed.
            </p>
          </div>

          {orderDetails && (
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Order Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Order Number:</span>
                  <span className="font-medium">{getOrderNumber(orderDetails.id)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Service:</span>
                  <span className="font-medium">{getServiceName(orderDetails.metadata)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Amount:</span>
                  <span className="font-medium">
                    {formatPrice(orderDetails.amount_total, orderDetails.currency)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Email:</span>
                  <span className="font-medium">{orderDetails.customer_email}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Payment Status:</span>
                  <span className={`font-medium capitalize ${
                    orderDetails.payment_status === 'paid' ? 'text-green-600' : 
                    orderDetails.payment_status === 'pending' ? 'text-yellow-600' : 
                    'text-red-600'
                  }`}>
                    {orderDetails.payment_status}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Order Date:</span>
                  <span className="font-medium">
                    {new Date(orderDetails.created_at).toLocaleDateString()}
                  </span>
                </div>
              </CardContent>
            </Card>
          )}

          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Check Your Email</h3>
                    <p className="text-muted-foreground text-sm">
                      We've sent a confirmation email with your order details and next steps. 
                      Please check your inbox (and spam folder just in case).
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Calendar className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">What Happens Next?</h3>
                    <ul className="text-muted-foreground text-sm space-y-1">
                      <li>• Our team will contact you within 4 hours</li>
                      <li>• We'll gather your project requirements</li>
                      <li>• Design work begins immediately</li>
                      <li>• Delivery within 48 hours (or faster for Pro+ clients)</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-8 space-y-4">
            <Button size="lg" asChild>
              <Link to="/portfolio">
                View Our Portfolio <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <div>
              <Link 
                to="/" 
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Return to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Success;