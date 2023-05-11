import { useEffect, useState } from "react";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  });

  return (
    <section className="py-20 space-y-5 text-center">
      <div className="section-title">Services</div>
      <h1 className='text-6xl font-bold'>Our Service Area</h1>
      <p>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
      {/* services */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {services.map((service) => (
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <img
                src={service.img}
                alt="Shoes"
                className="rounded-xl"
              />
            </figure>
            <div className="card-body  ">
              <h2 className="card-title">{service.title}</h2>
              <p className="text-left">Price : {service.price}</p>
            </div>
          </div>
        ))}
      </div>
      <button className="btn btn-error btn-outline ">More Services</button>
    </section>
  );
};

export default Services;
