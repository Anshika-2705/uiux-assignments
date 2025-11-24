// src/SymptomChecker.jsx
import React, { useState } from "react";
import "./styles.css";

export default function SymptomChecker() {
  const symptomList = [
    "Irregular periods",
    "Acne",
    "Weight gain",
    "Hair fall",
    "Excess facial hair",
    "Mood swings",
    "Dark neck patches",
  ];

  const [selected, setSelected] = useState([]);
  const [result, setResult] = useState("");

  const handleDragStart = (e, symptom) => {
    e.dataTransfer.setData("symptom", symptom);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const symptom = e.dataTransfer.getData("symptom");
    if (symptom && !selected.includes(symptom)) {
      setSelected([...selected, symptom]);
    }
  };

  const handleDragOver = (e) => e.preventDefault();

  const generateAdvice = () => {
    if (selected.length === 0) {
      setResult("Please drag some symptoms first.");
      return;
    }

    let advice = "";

    if (
      selected.includes("Irregular periods") ||
      selected.includes("Acne") ||
      selected.includes("Excess facial hair")
    ) {
      advice +=
        "• These symptoms may suggest hormonal imbalance. Consider tracking your cycles and consulting a gynecologist. ";
    }

    if (selected.includes("Weight gain") || selected.includes("Dark neck patches")) {
      advice +=
        "• Possible insulin resistance — focus on balanced meals, limiting sugar, and regular movement. ";
    }

    if (selected.includes("Hair fall") || selected.includes("Acne")) {
      advice +=
        "• It may help to check thyroid levels and vitamin levels (like Vitamin D, B12, iron). ";
    }

    advice +=
      "• General tips: stay active 30–40 minutes most days, reduce junk food, stay hydrated, and aim for 7–8 hours of sleep.";

    setResult(advice);
  };

  return (
    <div className="page">
      <h1 className="title">PCOS Symptom Checker – Drag &amp; Drop</h1>

      <div className="checker-container">
        <div className="checker-box">
          <h3>Drag Symptoms</h3>
          {symptomList.map((symptom) => (
            <div
              key={symptom}
              className="symptom-item"
              draggable
              onDragStart={(e) => handleDragStart(e, symptom)}
            >
              {symptom}
            </div>
          ))}
        </div>

        <div
          className="checker-box"
          onDragOver={handleDragOver}
          onDrop={handleDrop}
        >
          <h3>Your Selected Symptoms</h3>
          {selected.length === 0 && (
            <p className="text">Drag symptoms here to add them.</p>
          )}
          {selected.map((symptom) => (
            <div key={symptom} className="symptom-item">
              {symptom}
            </div>
          ))}
        </div>
      </div>

      <button className="submit-btn" onClick={generateAdvice}>
        Submit
      </button>

      {result && <div className="result-box">{result}</div>}
    </div>
  );
}
