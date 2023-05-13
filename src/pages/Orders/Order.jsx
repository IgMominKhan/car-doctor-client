import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const Order = () => {
  const { user } = useContext(AuthContext);

  const [orders, setOrders] = useState([]);
  useEffect(() => {
    fetch(`https://jq0nvs-3000.csb.app/bookings?email=${user?.email}`)
      .then((res) => res.json())
      .then((ordersData) => {
        setOrders(ordersData);
      });
  }, []);

  const handleDelete = (_id) => {
    const willDelete = confirm("Do you wandt to delete? Are your sure?");
    console.log(willDelete);
    if (willDelete) {
      fetch(`https://jq0nvs-3000.csb.app/bookings/${_id}`, {
        method: "delete",
      })
        .then((res) => res.json())
        .then((result) => {
          if (result.deletedCount) {
            alert("deleted success");
            const remaining = orders.filter((order) => order._id !== _id);
            setOrders(remaining);
          }
        });
    }
  };

  // update order
  const updateOrder = (_id) => {
    fetch(`https://jq0nvs-3000.csb.app/bookings/${_id}`, {
      method: "patch",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        confirm: true,
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.modifiedCount) {
          alert("updated confirm");
        }
      });
  };

  return (
    <div>
      <h1 className="font-bold text-6xl text-center my-8">Your Orders</h1>
      <div className="overflow-x-auto w-full">
        <table className="table w-full my-20">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {orders.map((order) => (
              <tr key={order._id}>
                <th>
                  <label>
                    <button
                      onClick={() => handleDelete(order._id)}
                      className="btn btn-circle btn-sm btn-outline"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </label>
                </th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={order?.img}
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">Hart Hagerty</div>
                      <div className="text-sm opacity-50">{order?.title}</div>
                    </div>
                  </div>
                </td>
                <td>
                  {order?.price}
                </td>
                <th>
                  <button
                    onClick={() => updateOrder(order._id)}
                    className="btn btn-warning btn-xs"
                  >
                    details
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Order;
