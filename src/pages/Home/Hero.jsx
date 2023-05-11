import hero from "../../assets/images/about_us/person.jpg";
import hero2 from "../../assets/images/about_us/parts.jpg";

const Hero = () => {
  return (
    <div>
      <div className="hero min-h-screen ">
        <div className="hero-content">
          <div className="md:w-1/2 relative">
            <img
              src={hero}
              className="w-3/4"
            />
            <img src={hero2}  className='absolute right-5 top-1/2 w-3/4 border-white border-8 rounded-lg shadow-2xl' />
          </div>
          <div className="md:w-1/2 space-y-5">
            <h1 className="section-title">About Us</h1>
            <h1 className="text-5xl font-bold">
              We are qualified & of experience in this field
            </h1>
            <p className="py-6">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable.
            </p>
            <p>
              the majority have suffered alteration in some form, by injected
              humour, or randomised words which don't look even slightly
              believable.
            </p>
            <button className="btn btn-error">Get More Info</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
