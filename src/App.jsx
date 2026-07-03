import "./App.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Clinic from "./components/Clinic";
import Doctors from "./components/Doctors";
import Review from "./components/Review";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      {/* <Services /> */}
      <Clinic />
      <Doctors />
      <Review />
      <Newsletter />
      <Footer />
    </>
  );
}

export default App;