// src/Causes.jsx
import React from "react";
import "./styles.css";

export default function Causes() {
  return (
    <div className="page">
      <h1 className="title">Causes of PCOS</h1>

      <p className="text info-intro">
        PCOS is not caused by one single thing. It usually happens because{" "}
        <strong>several factors</strong> – genes, hormones, insulin and lifestyle –
        come together and disturb the body’s normal balance.
      </p>

      <div className="info-grid-page">
        {/* Genetic Factors */}
        <div className="info-card-page">
          <div className="info-card-icon">🧬</div>
          <h2 className="subtitle info-subtitle">Genetic Factors</h2>
          <p className="text">
            PCOS often runs in families. If your mother, sister or close
            relatives have PCOS, your chances are higher.
          </p>
          <ul className="list">
            <li>Multiple genes related to hormones and metabolism are involved.</li>
            <li>These genes can affect how your ovaries release eggs.</li>
          </ul>
        </div>

        {/* Hormonal Imbalance */}
        <div className="info-card-page">
          <div className="info-card-icon">⚖️</div>
          <h2 className="subtitle info-subtitle">Hormonal Imbalance</h2>
          <p className="text">
            In PCOS, the balance between female and male hormones gets disturbed.
          </p>
          <ul className="list">
            <li>Androgens (“male” hormones) are higher than normal.</li>
            <li>
              LH/FSH ratio may change, which can disturb regular ovulation and
              periods.
            </li>
          </ul>
        </div>

        {/* Insulin Resistance */}
        <div className="info-card-page">
          <div className="info-card-icon">🍚</div>
          <h2 className="subtitle info-subtitle">Insulin Resistance</h2>
          <p className="text">
            Many people with PCOS have insulin resistance, where the body does
            not respond properly to insulin.
          </p>
          <ul className="list">
            <li>The body produces extra insulin to keep sugar under control.</li>
            <li>High insulin levels trigger the ovaries to make more androgens.</li>
          </ul>
        </div>

        {/* Lifestyle & Environment */}
        <div className="info-card-page">
          <div className="info-card-icon">🌱</div>
          <h2 className="subtitle info-subtitle">Lifestyle & Environment</h2>
          <p className="text">
            Lifestyle doesn’t “cause” PCOS alone, but it can make symptoms better
            or worse.
          </p>
          <ul className="list">
            <li>
              Low movement, poor sleep and high stress can worsen insulin
              resistance.
            </li>
            <li>
              Diet high in refined carbs and sugar may increase weight gain and
              hormone imbalance.
            </li>
          </ul>
        </div>
      </div>

      <p className="text info-note">
        <strong>Important:</strong> Having these risk factors does{" "}
        <em>not</em> mean you did something wrong. PCOS is a medical condition,
        not your fault. Lifestyle changes just help you manage it better. 💗
      </p>
    </div>
  );
}
