import "./Clinic.css";
import clinic from "../assets/clinic.png";

function Clinic() {
  return (
    <section className="clinic">
      <div className="clinic-left">
        <h2>Clinic With Innovation</h2>

        <p>
          We provide modern healthcare services with advanced technology
          and experienced doctors to ensure the best treatment for every
          patient.
        </p>

        <button>Learn More</button>
      </div>

      <div className="clinic-right">
        <img
        src={clinic}
       alt="Clinic"
       />
      </div>
    </section>
  );
}

export default Clinic;