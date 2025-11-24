// src/About.jsx
import React from "react";
import "./styles.css";

export default function About() {
  return (
    <div className="page about-page">

      <h1 className="title">About PCOS Hub</h1>

      <div className="about-section hover-card">
        <p className="text">
          PCOS Hub is dedicated to creating a safe, empowering, and informative space for individuals affected by Polycystic Ovary Syndrome. 
          We focus on awareness, education, emotional support, and building a strong community for those navigating PCOS.
        </p>

        <p className="text">
          Our mission is to break the stigma, spread accurate understanding, and empower people to take control of their health through 
          knowledge, support, and shared experiences.
        </p>
      </div>

      <div className="about-section hover-card">
        <h2 className="subtitle about-subtitle">Awareness</h2>
        <p className="text">
          We aim to increase global awareness of PCOS and support individuals through research-based resources, practical guidance, 
          and community-driven initiatives.
        </p>
      </div>

      <div className="about-section hover-card">
        <h2 className="subtitle about-subtitle">Our Vision</h2>
        <p className="text">
          To create a world where every individual affected by PCOS is heard, supported, and empowered with the tools needed to lead a 
          healthier and happier life.
        </p>
      </div>

      <div className="about-section hover-card">
        <h2 className="subtitle about-subtitle">What We Stand For</h2>
        <ul className="list">
          <li><strong>Education:</strong> Bringing verified, science-backed information to the community.</li>
          <li><strong>Support:</strong> Creating safe spaces to share experiences and uplift each other.</li>
          <li><strong>Advocacy:</strong> Breaking myths, fighting stigma, and amplifying real stories.</li>
          <li><strong>Empowerment:</strong> Helping individuals take active control of their health & well-being.</li>
        </ul>
      </div>

    </div>
  );
}
