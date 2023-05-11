import img1 from "../../assets/images/homeCarousel/1.jpg";
import img2 from "../../assets/images/homeCarousel/2.jpg";
import img3 from "../../assets/images/homeCarousel/3.jpg";
import img4 from "../../assets/images/homeCarousel/4.jpg";

const Slider = () => {
  return (
    <div>
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full md:min-h-[600px]">
          <img
            src={img1}
            className="w-full rounded-lg"
          />
          <div className="absolute rounded-lg  text-white flex h-full bg-gradient-to-r from-[#151515] to-[hsla(50,8%,0%,0)]">
            <div className="space-y-8 md:space-y-12 p-8 md:p-0 md:- md:w-1/3 md:ml-24 my-auto">
              <h1 className="font-bold text-6xl">
                Affordable Price For Car Servicing
              </h1>
              <p className='text-lg'>
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </p>
              <div className="flex flex-wrap gap-5">
                <button className="btn btn-warning text-white">Discover More</button>
                <button className="btn btn-outline text-white">Latest Projects</button>
              </div>
            </div>
          </div>

          <div className="absolute flex justify-end gap-5  left-5 right-5 bottom-5">
            <a href="#slide4" className="btn btn-circle">❮</a>
            <a href="#slide2" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full h-[600px]">
          <img
            src={img2}
            
            className="w-full rounded-lg"
          />
          <div className="absolute flex justify-end gap-5  left-5 right-5 bottom-5">
            <a href="#slide1" className="btn btn-circle">❮</a>
            <a href="#slide3" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full h-[600px]">
          <img
            src={img3}
            className="w-full rounded-lg"
          />
          <div className="absolute flex justify-end gap-5  left-5 right-5 bottom-5">
            <a href="#slide2" className="btn btn-circle">❮</a>
            <a href="#slide4" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full h-[600px]">
          <img
            
            src={img4}
            className="w-full rounded-lg"
          />
          <div className="absolute flex justify-end gap-5  left-5 right-5 bottom-5">
            <a href="#slide3" className="btn btn-circle">❮</a>
            <a href="#slide1" className="btn btn-circle">❯</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
