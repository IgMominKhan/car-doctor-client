import { Link } from "react-router-dom";
import Slider from "./Slider";
import Hero from "./Hero";
import Services from "./Services";

const Home = () => {
  return (
    <div>
      <Slider/>
      <Hero/>
      <Services/>
    </div>
  );
};

export default Home;
