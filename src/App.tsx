
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Browse from "./pages/Browse";
import Details from "./pages/Details";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Watch from "./pages/Watch";
import NotFound from "./pages/NotFound";
import MyList from "./pages/MyList";
import HelpCenter from "./pages/HelpCenter";
import TermsOfUse from "./pages/TermsOfUse";
import Privacy from "./pages/Privacy";
import About from "./pages/About";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/browse" element={<Browse />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/watch/:id" element={<Watch />} />
          <Route path="/details/:id" element={<Details />} />
          <Route path="/my-list" element={<MyList />} />
          <Route path="/help" element={<HelpCenter />} />
          <Route path="/terms" element={<TermsOfUse />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
