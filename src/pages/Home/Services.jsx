import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("https://jq0nvs-3000.csb.app/services")
      .then((res) => res.json())
      .then((data) => setServices(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <section className="py-20 space-y-5 text-center">
      <div className="section-title">Services</div>
      <h1 className="text-6xl font-bold">Our Service Area</h1>
      <p>
        the majority have suffered alteration in some form, by injected humour,
        or randomised words which don't look even slightly believable.
      </p>
      {/* services */}

      <div className="grid grid-cols-[repeat(auto-fit,minmax(18rem,1fr))] gap-5">
        {services.map((service) => (
          <div key={service._id} className="card bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <img
                src={service.img}
                alt="Shoes"
                className="rounded-xl"
              />
            </figure>
            <div className="card-body flex-row items-center justify-between">
              <div>
                <h2 className="card-title">{service.title}</h2>
                <p className="text-left">Price : {service.price}</p>
              </div>
              <Link className="btn btn-primary" to={`/booking/${service._id}`}>Book</Link>
            </div>
          </div>
        ))}
      </div>
      <button className="btn btn-error btn-outline ">More Services</button>
    </section>
  );
};

export default Services;
