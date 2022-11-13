import * as React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import { ServicePage } from "./pages/Service/ServicePage";
import { AboutPage } from "./pages/About/AboutPage";
import { PricingPage } from "./pages/Pricing/PricingPage";
import { ItemPage } from "./pages/Item/ItemPage";
import { LoginPage } from "./pages/Login/LoginPage";
import { PageLayout} from "./pages/Layout/PageLayout";

function App() {
  return (
    <>
      <Routes>
        <Route element={<PageLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/service" element={<ServicePage/>}/>
          <Route path="/about" element={<AboutPage/>}/>
          <Route path="/pricing" element={<PricingPage/>}/>
          <Route path="/item" element={<ItemPage/>}/>
        </Route>
        <Route element={<LoginPage />}/>
      </Routes>
    </>
  );
}
export default App;