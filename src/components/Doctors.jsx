import "./Doctors.css";

import doc1 from "../assets/doc1.jpg";
import doc2 from "../assets/doc2.jpg";
import doc4 from "../assets/doc4.jpg";;




function Doctors() {

    const doctors = [
        {
            id: 1,
            name: "Dr. riya",
            specialization: "Dentist",
            image: doc1
        },
        {
            id: 2,
            name: "Dr. Smith",
            specialization: "Neurologist",
            image: doc2
        },
        {
            id: 3,
            name: "Dr. Alex",
            specialization: "Cardiologist",
            image: doc4
        },
        {
            id: 4,
            name: "Dr. Sara",
            specialization: "Eye Specialist",
            image: doc1
        }
    ];

    return (
        <section className="doctors">

            <h2>We Have The Best Specialist</h2>

            <div className="doctor-container">

                {doctors.map((doctor) => (
                    <div className="doctor-card" key={doctor.id}>

                        <img
                            src={doctor.image}
                            alt={doctor.name}
                        />

                        <h3>{doctor.name}</h3>

                        <p>{doctor.specialization}</p>

                    </div>
                ))}

            </div>

        </section>
    );
}

export default Doctors;