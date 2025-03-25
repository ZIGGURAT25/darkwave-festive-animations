
import React from 'react';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Index from "./pages/Index";
import Lineup from "./pages/Lineup";
import About from "./pages/About";
import Tickets from "./pages/Tickets";
import Registration from "./pages/Registration";
import NotFound from "./pages/NotFound";
import PageTransition from "./components/transitions/PageTransition";
import ScrollProgress from "./components/animations/ScrollProgress";
import Navbar from "./components/Navbar";
import Header from "./components/Header";

// Create the query client outside of the component
const queryClient = new QueryClient();

// Component for routes to allow hooks to work properly within Router context
const AppRoutes = () => {
  const location = useLocation();

  return (
    <>
      <Navbar />
      <PageTransition>
        <Routes location={location}>
          <Route path="/" element={<Index />} />
          <Route path="/lineup" element={<Lineup />} />
          <Route path="/about" element={<About />} />
          <Route path="/tickets" element={<Tickets />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </PageTransition>
      <Toaster />
      <Sonner />
    </>
  );
};

// The main App component with providers properly ordered
const App = () => {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <ScrollProgress />
          <AppRoutes />
        </QueryClientProvider>
      </BrowserRouter>
    </React.StrictMode>
  );
};

export default App;
