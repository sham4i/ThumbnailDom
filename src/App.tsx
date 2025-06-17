import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/hooks/useTheme";
import Index from "./pages/Index";
import Portfolio from "./pages/Portfolio";
import WorkWithUs from "./pages/WorkWithUs";
import ServiceTestDrive from "./pages/ServiceTestDrive";
import ServiceCreatorPro from "./pages/ServiceCreatorPro";
import ServiceCreatorProPlus from "./pages/ServiceCreatorProPlus";
import ServiceEnterprise from "./pages/ServiceEnterprise";
import TermsOfService from "./pages/TermsOfService";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Contact from "./pages/Contact";
import Success from "./pages/Success";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/work-with-us" element={<WorkWithUs />} />
            <Route path="/service/test-drive" element={<ServiceTestDrive />} />
            <Route path="/service/creator-pro" element={<ServiceCreatorPro />} />
            <Route path="/service/creator-pro-plus" element={<ServiceCreatorProPlus />} />
            <Route path="/service/enterprise" element={<ServiceEnterprise />} />
            <Route path="/terms" element={<TermsOfService />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/success" element={<Success />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;