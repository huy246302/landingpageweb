import * as React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import { ServicePage } from "./pages/Service/ServicePage";
import { AboutPage } from "./pages/About/AboutPage";
import { PricingPage } from "./pages/Pricing/PricingPage";
import { ItemPage } from "./pages/Item/ItemPage";
import { LoginPage } from "./pages/Login/LoginPage";
import { PageLayout} from "./pages/Layout/PageLayout";
import { ItemDetailPage } from "./pages/Item/ItemDetailPage";

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
          <Route path="/item/:id" element={<ItemDetailPage />} />
        </Route>
        <Route path="/login" element={<LoginPage />}/>
      </Routes>
    </>
  );
}
export default App;