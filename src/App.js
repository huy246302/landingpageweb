import * as React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import { ServicePage } from "./pages/Service/ServicePage";
import { AboutPage } from "./pages/About/AboutPage";
import { PricingPage } from "./pages/Pricing/PricingPage";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/service" element={<ServicePage/>}/>
        <Route path="/about" element={<AboutPage/>}/>
        <Route path="/pricing" element={<PricingPage/>}/>
      </Routes>
      <Footer />
    </>
  );
}
export default App;