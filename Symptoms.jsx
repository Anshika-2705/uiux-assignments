// src/Symptoms.jsx
import React from "react";
import "./styles.css";

export default function Symptoms() {
  return (
    <div className="page">
      <h1 className="title">Symptoms of PCOS</h1>
      <p className="text info-intro">
        PCOS can look different for every person. Some have many symptoms, some
        only a few. These are the <strong>common signs</strong> to watch out for:
      </p>

      <div className="info-grid-page">
        {/* Menstrual Changes */}
        <div className="info-card-page">
          <div className="info-card-icon">📅</div>
          <h2 className="subtitle info-subtitle">Menstrual Changes</h2>
          <ul className="list">
            <li>Irregular or very few periods.</li>
            <li>Periods that are extremely heavy or very light.</li>
            <li>Cycles that keep changing in length.</li>
          </ul>
        </div>

        {/* Androgen Related */}
        <div className="info-card-page">
          <div className="info-card-icon">✨</div>
          <h2 className="subtitle info-subtitle">Androgen-Related Symptoms</h2>
          <ul className="list">
            <li>Acne, oily skin and stubborn pimples.</li>
            <li>
              Extra facial or body hair (especially on chin, chest, stomach).
            </li>
            <li>Hair thinning on the scalp (male-pattern hair loss).</li>
          </ul>
        </div>

        {/* Metabolic & Other */}
        <div className="info-card-page">
          <div className="info-card-icon">💤</div>
          <h2 className="subtitle info-subtitle">Metabolic & Other Symptoms</h2>
          <ul className="list">
            <li>Weight gain or difficulty losing weight.</li>
            <li>Dark, velvety patches on neck, underarms or around folds.</li>
            <li>Fatigue, mood swings, anxiety or low mood.</li>
          </ul>
        </div>

        {/* Fertility & Long-Term */}
        <div className="info-card-page">
          <div className="info-card-icon">🩺</div>
          <h2 className="subtitle info-subtitle">Fertility & Long-Term Health</h2>
          <ul className="list">
            <li>Difficulty conceiving due to irregular ovulation.</li>
            <li>Higher risk of prediabetes, type-2 diabetes and cholesterol issues.</li>
            <li>In some cases, higher risk of high blood pressure and heart disease.</li>
          </ul>
        </div>
      </div>

      <p className="text info-note">
        If you relate to several of these symptoms, it’s a good idea to{" "}
        <strong>talk to a gynecologist or endocrinologist</strong>. Early
        diagnosis helps you manage PCOS calmly instead of stressing alone. 💕
      </p>
    </div>
  );
}
