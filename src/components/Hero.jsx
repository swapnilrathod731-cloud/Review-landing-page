import "./Hero.css";
import hero from "../assets/hero.png";

function Hero() {
  return (
    <section className="hero">

      <div className="hero-content">

        <p className="hero-subtitle">
          WELCOME TO MEDICARE
        </p>

        <h1>
          Best <span>Specialists</span>
        </h1>

        <p className="hero-text">
          We are committed to providing our patients with exceptional
          healthcare services. Our experienced doctors ensure the best
          treatment for every patient.
        </p>

        <div className="hero-buttons">
          <button className="hero-btn">
            Book Appointment
          </button>

          <button className="hero-btn2">
            Learn More →
          </button>
        </div>

      </div>

      <div className="hero-image">

        <img
          src={hero}
          alt="Doctor"
        />

      </div>

    </section>
  );
}

export default Hero;