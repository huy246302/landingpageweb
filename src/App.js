import React, { useState, useEffect } from 'react';
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
import { DashboardPage } from "./pages/Dashboard/DashboardPage";
import { RegisterPage } from "./pages/Register/RegisterPage";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  useEffect(() => {
    setIsAuthenticated(JSON.parse(localStorage.getItem('is_authenticated')));
    console.log('isAuthenticated',isAuthenticated);
  }, []);

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
        <Route path="/dashboard" element={<DashboardPage setIsAuthenticated={setIsAuthenticated} />}/>
        <Route path="/login" element={<LoginPage setIsAuthenticated={setIsAuthenticated}/>}/>
        <Route path="/register" element={<RegisterPage/>}/>
      </Routes>
    </>
  );
}
export default App;