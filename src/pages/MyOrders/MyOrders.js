import axios from "axios";
import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import PageTopTitle from "../Shared/PageTopTitle/PageTopTitle";
import "./MyOrders.css";

const MyOrders = () => {
  const [myOrders, setMyOrders] = useState([]);

  const pageTopTitle = {
    title: "My Orders",
    subtitle:
      "All of your order are shown below. You can cancel any order by clicking on X icon",
  };

  const { user } = useAuth();

  useEffect(() => {
    axios
      .post("http://localhost:5000/my-orders", { email: user.email })
      .then((res) => setMyOrders(res.data));
  }, [myOrders]);

  const handleCancelOrder = (id) => {
    const proceed = window.confirm("Are sure, want to delete?");
    if (proceed) {
      axios.delete(`http://localhost:5000/my-orders/${id}`).then((res) => {
        if (res.data.deletedCount > 0) {
          alert("Deleted Successfully");
        }
      });
    }
  };

  return (
    <div>
      <div>
        <PageTopTitle pageTopTitle={pageTopTitle} />
      </div>

      <div className="orders-container">
          <h1 className={myOrders.length && 'hidden'}>You have no Order Yet!</h1>
        <div className={!myOrders.length && 'hidden' }>
          <table class="table table-hover">
            <thead>
              <tr>
                <th scope="col"></th>
                <th scope="col">Service Name</th>
                <th scope="col">Status</th>
                <th scope="col">Cancel</th>
              </tr>
            </thead>
            <tbody>
              {myOrders.map((order) => (
                <tr key={order._id}>
                  <th scope="row">
                    {" "}
                    {
                      <img
                        src={order.img}
                        style={{ height: "40px", width: "40px" }}
                        className="img-fluid"
                        alt=""
                      />
                    }{" "}
                  </th>
                  <td> {order.title} </td>
                  <td> {order?.status} </td>
                  <td
                    onClick={() => handleCancelOrder(order._id)}
                    style={{ cursor: "pointer" }}
                  >
                    X
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyOrders;
