import { BrowserRouter } from "react-router-dom";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
  WhatsAppFloat
} from "./components";
import { bgVideo } from "./assets";

const App = () => {
  useEffect(() => {
    console.log("Service ID:", import.meta.env.VITE_APP_EMAILJS_SERVICE_ID);
    console.log("Template ID:", import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID);
    console.log("Public Key:", import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY);
  }, []);
  return (
    <BrowserRouter>
    <WhatsAppFloat />
      <div className="relative z-0 bg-primary">
        <Navbar />
        <div className="bg-no-repeat bg-center max-h-screen relative">
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        {/* <Feedbacks /> */}
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
