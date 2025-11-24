import React from "react";
import "./styles.css";

export default function Home() {
  return (
    <div className="home-page">
      {/* HERO SECTION */}
      <section className="hero-section home-hero-wrapper">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Empowering Women<br />Living with PCOS
            </h1>
            <p className="hero-subtitle">
              Raising awareness, providing education, and building a supportive community.
            </p>
            <div className="hero-buttons">
              <a href="#focus-section" className="btn btn-primary">Learn More</a>
            </div>
          </div>

          <div className="hero-illustration">
            <img
              src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=500&h=500&fit=crop"
              alt="Woman empowerment"
              className="hero-img"
            />
          </div>
        </div>
      </section>

      {/* WHAT WE FOCUS ON */}
      <section id="focus-section" className="home-section focus-section">
        <h2 className="section-heading center">What We Focus On</h2>

        <div className="card-grid">
          <div className="info-card card-with-image">
            <div className="card-icon">
              <img src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=200&h=200&fit=crop" alt="Education" />
            </div>
            <h3>Education</h3>
            <p>We provide resources and awareness for individuals affected by PCOS.</p>
          </div>

          <div className="info-card card-with-image">
            <div className="card-icon">
              <img src="https://images.unsplash.com/photo-1529390079861-591de354faf5?w=200&h=200&fit=crop" alt="Support" />
            </div>
            <h3>Support</h3>
            <p>We provide resources and awareness for individuals affected by PCOS.</p>
          </div>

          <div className="info-card card-with-image">
            <div className="card-icon">
              <img src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=200&h=200&fit=crop" alt="Advocacy" />
            </div>
            <h3>Advocacy</h3>
            <p>We provide resources and awareness for individuals affected by PCOS.</p>
          </div>
        </div>
      </section>

      {/* BLOG SECTION */}
      <section id="blog-section" className="home-section blog-section">
        <h2 className="section-heading center">Our Blog</h2>

        <div className="blog-cards">
          <div className="blog-card">
            <div className="blog-image">
              <img src="https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=400&h=250&fit=crop" alt="PCOS Myths" />
            </div>
            <div className="blog-content">
              <h3>Understanding PCOS: Myths vs. Facts</h3>
              <p>Debunking common misconceptions with scientific facts.</p>
              <a href="#" className="read-more">Read More →</a>
            </div>
          </div>

          <div className="blog-card">
            <div className="blog-image">
              <img src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=400&h=250&fit=crop" alt="Nutrition" />
            </div>
            <div className="blog-content">
              <h3>Nutrition and Lifestyle Tips</h3>
              <p>How to manage PCOS with diet and exercise.</p>
              <a href="#" className="read-more">Read More →</a>
            </div>
          </div>

          <div className="blog-card">
            <div className="blog-image">
              <img src="https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=400&h=250&fit=crop" alt="Mental Health" />
            </div>
            <div className="blog-content">
              <h3>Mental Health and PCOS</h3>
              <p>Understanding the emotional impact of PCOS.</p>
              <a href="#" className="read-more">Read More →</a>
            </div>
          </div>
        </div>
      </section>

      {/* GET INVOLVED SECTION */}
      <section id="get-involved-section" className="home-section involved-section">
        <h2 className="section-heading center">Get Involved</h2>

        <div className="involved-grid">
          
          {/* VOLUNTEER CARD - NOW CLICKABLE */}
          <div className="involved-card involved-large">
            <div className="involved-overlay">
              <h3>Volunteer</h3>
              <p>Help us create awareness and support others.</p>

              {/* FIXED: BUTTON NOW GOES TO Volunteer.jsx */}
              <a href="/volunteer" className="involved-btn">Join Us</a>
            </div>

            <img
              src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=600&h=700&fit=crop"
              alt="Volunteer"
            />
          </div>

          {/* PARTNER */}
      <div className="involved-card involved-small">
  <div className="involved-overlay">
    <h3>Partner with Us</h3>
    <p>Collaborate on impactful PCOS programs.</p>

    {/* Correct Single Button With Link */}
    <a
      className="involved-btn"
      href="https://docs.google.com/forms/d/11WDg_hROh_uO-VCBK61RGwCGtFy9oWEiOVPhaQbQklE/edit"
      target="_blank"
      rel="noopener noreferrer"
    >
      Learn More
    </a>
  </div>

  <img
    src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=600&h=350&fit=crop"
    alt="Partner"
  />
</div>

          {/* SHARE STORY */}
          <div className="involved-card involved-small">
            <div className="involved-overlay">
              <h3>Share Your Story</h3>
              <p>Your journey inspires others fighting PCOS.</p>

              {/* FIXED INVALID BUTTON */}
              <a
                href="https://docs.google.com/forms/d/1PnCU_bgTbNRT4fhqBJ6wwbGWzn9aIy2awMsEim3OLGM/edit"
                target="_blank"
                className="involved-btn"
                rel="noopener noreferrer"
              >
                Share Now
              </a>
            </div>

            <img
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=350&fit=crop"
              alt="Share Story"
            />
          </div>
        </div>
      </section>

      <footer className="footer">© 2025 PCOS Hub</footer>
    </div>
  );
}
