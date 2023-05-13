const Checkout = () => {
  const handleCheckout = () => {
  };

  return (
    <form
      className="my-20 bg-slate-200 lg:p-16 rounded-2xl"
      onSubmit={handleCheckout}
    >
      <div className="card-body">
        <h1 className="font-bold text-6xl text-center mb-8">Checkout</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 gap-x-8">
          <div className="form-control">
            <label className="label">
              <span className="label-text">First Name :</span>
            </label>
            <input
              type="text"
              placeholder="Frist Name"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Last Name :</span>
            </label>
            <input
              type="text"
              placeholder="Last Name"
              className="input input-bordered"
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Phone :</span>
            </label>
            <input
              type="text"
              placeholder="Your phone"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email :</span>
            </label>
            <input
              type="text"
              placeholder="Your Email"
              className="input input-bordered"
            />
          </div>
          <div className="form-control col-span-2">
            <label className="label">
              <span className="label-text">Message :</span>
            </label>
            <textarea className="h-36 w-full"></textarea>
          </div>
        </div>


        <div className="form-control mt-6">
          <button className="btn btn-error text-white">Checkout</button>
        </div>
      </div>
    </form>
  );
};

export default Checkout;
