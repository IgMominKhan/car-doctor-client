import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const BookService = () => {
  const { user } = useContext(AuthContext);

  const { title, price, service_id, img } = useLoaderData();

  // handle Booking
  const handleBooking = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const date = form.date.value;
    const dueAmount = form.due.value;
    const message = form.message.value;


    const bookingInfo = {
      email,
      date,
      dueAmount,
      message,
      img,
      service_id,
      price,
    };
    console.log(bookingInfo);

    fetch("https://jq0nvs-3000.csb.app/bookings", {
      method: "post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bookingInfo),
    })
      .then((res) => res.json())
      .then((result) => {
        if(result.insertedId){
          alert('booking success')
        }
      });
  };

  return (
    <div>
      <form
        className="my-20 bg-slate-200 lg:p-16 rounded-2xl"
        onSubmit={handleBooking}
      >
        <div className="card-body">
          <h1 className="font-bold text-6xl text-center mb-8">BookService</h1>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 gap-x-8">
            <div className="form-control">
              <label className="label">
                <span className="label-text">E-mail</span>
              </label>
              <input
                type="text"
                placeholder="Enter your email"
                defaultValue={user?.email}
                className="input input-bordered"
                name="email"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Date :</span>
              </label>
              <input
                type="date"
                name="date"
                placeholder="Choose Date"
                className="input input-bordered"
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Service Name :</span>
              </label>
              <input
                type="text"
                placeholder="Service name"
                defaultValue={title}
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Due Amount :</span>
              </label>
              <input
                type="text"
                placeholder="Enter amount"
                className="input input-bordered"
                name="due"
              />
            </div>
            <div className="form-control col-span-2">
              <label className="label">
                <span className="label-text">Message :</span>
              </label>
              <textarea
                name="message"
                placeholder="Your message"
                className="h-36 w-full"
              >
              </textarea>
            </div>
          </div>

          <div className="form-control mt-6">
            <button className="btn btn-error text-white">Book Now</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default BookService;
