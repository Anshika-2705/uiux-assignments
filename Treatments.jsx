// src/Treatments.jsx
import React from "react";
import "./styles.css";

export default function Treatments() {
  return (
    <div className="page">
      <h1 className="title">Treatment & Management of PCOS</h1>
      <p className="text info-intro">
        There is no “one magic cure” for PCOS, but there are{" "}
        <strong>many ways to manage it</strong>. Treatment is usually a
        combination of lifestyle, medicines and emotional support, based on your
        goals (periods, skin, fertility, weight, etc.).
      </p>

      <div className="info-grid-page">
        {/* Lifestyle Changes */}
        <div className="info-card-page">
          <div className="info-card-icon">🥗</div>
          <h2 className="subtitle info-subtitle">Lifestyle Foundations</h2>
          <ul className="list">
            <li>
              Balanced meals with whole grains, protein, healthy fats and plenty
              of veggies.
            </li>
            <li>
              Regular movement – walking, strength training, dance or any
              activity you enjoy.
            </li>
            <li>Prioritising sleep, stress management and screen-time breaks.</li>
          </ul>
        </div>

        {/* Medical Treatment */}
        <div className="info-card-page">
          <div className="info-card-icon">💊</div>
          <h2 className="subtitle info-subtitle">Medical Treatment</h2>
          <ul className="list">
            <li>
              Hormonal pills or other medicines to regulate cycles and reduce
              excess androgen symptoms.
            </li>
            <li>
              Insulin-sensitising medicines (like metformin) if you have insulin
              resistance or prediabetes.
            </li>
            <li>
              Fertility-focused treatments (ovulation induction, etc.) when
              trying to conceive.
            </li>
          </ul>
          <p className="text small-note">
            <strong>Always</strong> take medicines only under a doctor’s
            supervision.
          </p>
        </div>

        {/* Skin & Hair Care */}
        <div className="info-card-page">
          <div className="info-card-icon">🧴</div>
          <h2 className="subtitle info-subtitle">Skin & Hair Management</h2>
          <ul className="list">
            <li>
              Dermatology treatments for acne, pigmentation and hair fall (topical
              creams, peels, etc.).
            </li>
            <li>
              Laser hair reduction or other methods if excess hair is affecting
              confidence.
            </li>
            <li>Gentle, consistent skincare instead of harsh DIY fixes.</li>
          </ul>
        </div>

        {/* Emotional Support */}
        <div className="info-card-page">
          <div className="info-card-icon">💖</div>
          <h2 className="subtitle info-subtitle">Mental Health & Support</h2>
          <ul className="list">
            <li>Therapy or counselling to deal with anxiety, body-image and mood.</li>
            <li>
              Support groups or communities (online/offline) to share experiences.
            </li>
            <li>
              Journaling, relaxation, hobbies and boundary-setting to reduce
              stress.
            </li>
          </ul>
        </div>
      </div>

      <p className="text info-note">
        PCOS management is a <strong>long-term journey</strong>, not a one-week
        challenge. Small, consistent steps matter more than perfection. Be kind
        to yourself while you figure out what works for your body. 🌸
      </p>
    </div>
  );
}
