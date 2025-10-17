import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
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
