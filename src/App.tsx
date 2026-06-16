import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { captureAttribution } from "@/lib/attribution";
import Index from "./pages/Index";
import AboutUs from "./pages/AboutUs";
import CoursesOnOffer from "./pages/CoursesOnOffer";
import MeetTheTeam from "./pages/MeetTheTeam";
import ContactUs from "./pages/ContactUs";
import NotFound from "./pages/NotFound";
import SingleEngineCPL from "./pages/singleEnginecpl";
import MultiEngineCPL from "./pages/multiEnginecpl";
import CommercialPilotLicense from "./pages/commercialPilotLicense";
import SacaaRequirements from "./pages/SacaaRequirements";

const queryClient = new QueryClient();

// Record marketing attribution (UTMs, ad click IDs, referrer) from the entry
// URL as early as possible, before any navigation can drop the query string.
captureAttribution();

// Reset scroll to the top of the page on every route change so navigating
// to a page (e.g. /contact) never lands mid-page (was showing the FAQ).
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/courses" element={<CoursesOnOffer />} />
          <Route path="/team" element={<MeetTheTeam />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/single-engine" element={<SingleEngineCPL />} />
          <Route path="/multi-engine" element={<MultiEngineCPL/>} />
          <Route path="/commercial-pilot" element={<CommercialPilotLicense/>} />
          <Route path="/sacaa-requirements" element={<SacaaRequirements/>} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
