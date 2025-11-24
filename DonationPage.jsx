import React, { useState } from "react";
import "./styles.css";

export default function DonationPage() {
  const [freq, setFreq] = useState("One-time");
  const [amount, setAmount] = useState("");
  const [submitted, setSubmitted] = useState(false); // NEW

  const freqOptions = ["One-time", "Monthly", "Quarterly", "Yearly"];
  const amountOptions = ["3000", "2000", "1500", "1000", "500", "250"];

  const handleSubmit = () => {
    if (!amount || amount <= 0) {
      alert("Please enter a valid donation amount.");
      return;
    }

    setSubmitted(true);

    // Reset form
    setFreq("One-time");
    setAmount("");
  };

  return (
    <div className="page">
      <h1 className="title">Support PCOS Awareness</h1>
      <h2 className="subtitle">2025 Donations</h2>

      <p className="text">
        Your help supports PCOS education, awareness, and empowerment initiatives.
      </p>

      <div className="donate-box">
        {/* Frequency Selection */}
        <div className="frequency-row">
          {freqOptions.map((f) => (
            <button
              key={f}
              className={`freq-btn ${freq === f ? "active" : ""}`}
              onClick={() => {
                setFreq(f);
                setAmount("");
              }}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Amount Selection */}
        <div className="amount-grid">
          {amountOptions.map((amt) => (
            <button
              key={amt}
              className={`amount-btn ${amount === amt ? "active" : ""}`}
              onClick={() => setAmount(amt)}
            >
              ₹{amt}
            </button>
          ))}
        </div>

        {/* Custom Amount */}
        <div className="custom-box">
          <label>Other Amount (₹)</label>
          <input
            type="number"
            placeholder="Enter amount"
            className="custom-input"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>

        <button className="submit-btn" onClick={handleSubmit}>
          Submit Donation
        </button>

        {/* THANK YOU MESSAGE */}
        {submitted && (
          <div className="thank-you">
            🎉 <strong>Thank you for your generous donation!</strong><br />
            Your support helps us continue raising awareness and supporting
            individuals living with PCOS.
          </div>
        )}
      </div>
    </div>
  );
}
