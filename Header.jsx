// src/Header.jsx
import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import "./styles.css";

export default function Header() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const closeTimeout = useRef(null);
  const location = useLocation();

  // DELAYED CLOSE
  const openDropdown = () => {
    if (closeTimeout.current) clearTimeout(closeTimeout.current);
    setDropdownOpen(true);
  };

  const closeDropdown = () => {
    closeTimeout.current = setTimeout(() => {
      setDropdownOpen(false);
    }, 350); // <-- 350ms delay so user can click comfortably
  };

  // Scroll handler
  const handleScrollLink = (id) => {
    if (location.pathname === "/") {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = `/#${id}`;
    }
  };

  return (
    <header className="header">
      <div className="header-inner">
        <div className="logo">PCOS Hub</div>

        <nav className="nav">
          <Link className="nav-link" to="/">Home</Link>
          <Link className="nav-link" to="/about">About</Link>

          {/* UPDATED DROPDOWN */}
          <div
            className="dropdown"
            onMouseEnter={openDropdown}
            onMouseLeave={closeDropdown}
          >
            <div className="nav-link dropdown-title">About PCOS ▾</div>

            {dropdownOpen && (
              <div className="dropdown-menu">
                <Link className="dropdown-item" to="/causes">Causes</Link>
                <Link className="dropdown-item" to="/symptoms">Symptoms</Link>
                <Link className="dropdown-item" to="/treatments">Treatments</Link>
              </div>
            )}
          </div>

          <button className="nav-link nav-button-link" onClick={() => handleScrollLink("blog-section")}>
            Blog
          </button>

          <button className="nav-link nav-button-link" onClick={() => handleScrollLink("get-involved-section")}>
            Get Involved
          </button>

          <Link className="nav-link" to="/checker">Checker</Link>
        </nav>

        <Link to="/donate" className="donate-link">
          <button className="donate-btn">Donate</button>
        </Link>
      </div>
    </header>
  );
}
