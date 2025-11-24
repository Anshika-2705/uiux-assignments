// src/App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import "./styles.css";

import Volunteer from "./volunteer";
import Header from "./Header";
import Home from "./Home";
import About from "./About";
import Causes from "./Causes";
import Symptoms from "./Symptoms";
import Treatments from "./Treatments";
import DonationPage from "./DonationPage";
import SymptomChecker from "./SymptomChecker";

export default function App() {
  return (
    <div className="app-container">
      <Header />

      <main className="page-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />


          <Route path="/volunteer" element={<Volunteer />} />
          {/* About PCOS dropdown routes */}
          <Route path="/causes" element={<Causes />} />
          <Route path="/symptoms" element={<Symptoms />} />
          <Route path="/treatments" element={<Treatments />} />

          {/* Symptom checker page */}
          <Route path="/checker" element={<SymptomChecker />} />

          {/* Donation page */}
          <Route path="/donate" element={<DonationPage />} />

          {/* Fallback – go to home */}
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
    </div>
  );
}
