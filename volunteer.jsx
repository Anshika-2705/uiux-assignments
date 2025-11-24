// src/Volunteer.jsx
import React from "react";
import "./styles.css";

export default function Volunteer() {
  return (
    <div className="page volunteer-page">
      {/* HERO SECTION */}
      <section className="vol-hero">
        <div className="vol-hero-left">
          <h1 className="title">Volunteer with PCOS Hub</h1>
          <p className="text">
            Your time and voice can make a real difference. Join our volunteer
            team to spread awareness, support people with PCOS, and help build a
            kinder, more informed community.
          </p>

          <ul className="vol-hero-list">
            <li>Flexible, remote-friendly roles</li>
            <li>Work on real awareness campaigns</li>
            <li>Certificates & experience you can add to your CV</li>
          </ul>

          <a
            href="https://forms.gle/your-google-form-link"
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary vol-hero-btn"
          >
            Apply to Volunteer
          </a>
        </div>

        <div className="vol-hero-right">
          <div className="vol-hero-stat">
            <h2>10k+</h2>
            <p>People reached through awareness posts</p>
          </div>
          <div className="vol-hero-stat">
            <h2>45+</h2>
            <p>Blogs, posts & resources created</p>
          </div>
          <div className="vol-hero-stat">
            <h2>12</h2>
            <p>Online events & webinars hosted</p>
          </div>
        </div>
      </section>

      {/* ROLES GRID */}
      <section className="vol-section">
        <h2 className="subtitle">Choose How You Want to Help</h2>
        <div className="vol-roles-grid">
          <div className="vol-role-card">
            <h3>Awareness Ambassador</h3>
            <p>
              Share verified PCOS facts, infographics, and stories on social
              media to bust myths and reduce stigma.
            </p>
          </div>

          <div className="vol-role-card">
            <h3>Content Creator</h3>
            <p>
              Help us write posts, blogs, captions and simple explainers about
              symptoms, diagnosis, and self-care.
            </p>
          </div>

          <div className="vol-role-card">
            <h3>Event Volunteer</h3>
            <p>
              Support us in organizing webinars, Instagram lives, and small
              online workshops for awareness.
            </p>
          </div>

          <div className="vol-role-card">
            <h3>Community Buddy</h3>
            <p>
              Be a kind listener in our community spaces and help people feel
              heard, believed, and less alone.
            </p>
          </div>

          <div className="vol-role-card">
            <h3>Design / Canva Support</h3>
            <p>
              Create simple posters, reels covers, and infographics using Canva
              or any design tool you like.
            </p>
          </div>

          <div className="vol-role-card">
            <h3>Survey & Research Helper</h3>
            <p>
              Help with anonymous polls and basic data collection to understand
              how PCOS affects students and youth.
            </p>
          </div>
        </div>
      </section>

      {/* BENEFITS + HOW IT WORKS */}
      <section className="vol-section vol-benefits-section">
        <div className="vol-benefits">
          <h2 className="subtitle">What You Get</h2>
          <ul>
            <li>Digital certificate for active volunteers</li>
            <li>Experience for college applications & CV</li>
            <li>Chance to work on real awareness campaigns</li>
            <li>Network with people who care about women’s health</li>
          </ul>
        </div>

        <div className="vol-steps">
          <h2 className="subtitle">How It Works</h2>
          <ol>
            <li>Fill the short volunteer application form.</li>
            <li>We’ll email you within a few days with next steps.</li>
            <li>Join a WhatsApp / Discord group for coordination.</li>
            <li>Start contributing at your own comfortable pace.</li>
          </ol>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="vol-final-cta">
        <h2>Ready to Start?</h2>
        <p>
          Even a few hours a month can help someone feel seen, supported, and
          less confused about PCOS.
        </p>
        <a
          href="https://forms.gle/your-google-form-link"
          target="_blank"
          rel="noreferrer"
          className="btn btn-primary"
        >
          Become a Volunteer
        </a>
      </section>
    </div>
  );
}
