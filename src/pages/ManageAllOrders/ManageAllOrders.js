import axios from "axios";
import React, { useEffect, useState } from "react";
import PageTopTitle from "../Shared/PageTopTitle/PageTopTitle";

const ManageAllOrders = () => {
  const [orders, setOrders] = useState([]);
  const [isOrdersChange, setIsOrdersChange] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:5000/manage-all-orders")
      .then((res) => setOrders(res.data));
  }, [isOrdersChange]);

  //   Cancel order hanlder
  const handleCancelOrder = (id) => {
    const proceed = window.confirm("Are sure, want to delete?");
    if (proceed) {
      axios
        .delete(`http://localhost:5000/manage-all-orders/${id}`)
        .then((res) => {
          if (res.data.deletedCount > 0) {
            alert("Deleted Successfully");
            setIsOrdersChange(true);
          }
        });
    }
  };

  // Page top Title props object
  const pageTopTitle = {
    title: `Manage All Orders: ${orders.length}`,
    subtitle: "You can delete anyone's else order from this page as an admin",
  };

  const handleApproval = (id) => {
    axios
      .patch(`http://localhost:5000/manage-all-orders/${id}`, {
        status: "Approved",
      })
      .then((res) => {
        if (res.data.modifiedCount > 0) {
          setIsOrdersChange(true);
        }
      });
  };

  return (
    <div>
      <div>
        <PageTopTitle pageTopTitle={pageTopTitle} />
      </div>
      <div className="orders-container">
        <h1 className={orders.length && "hidden"}>There is no Order Yet!</h1>
        <div className={!orders.length && "hidden"}>
          <table class="table table-hover">
            <thead>
              <tr>
                <th scope="col"></th>
                <th scope="col">Service Name</th>
                <th scope="col">Ordered By</th>
                <th scope="col">Status</th>
                <th scope="col"></th>
                <th scope="col">Cancel</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order._id}>
                  <th scope="row">
                    {" "}
                    {
                      <img
                        src={order?.orderedService?.img}
                        style={{ height: "40px", width: "40px" }}
                        className="img-fluid"
                        alt=""
                      />
                    }{" "}
                  </th>
                  <td> {order?.orderedService?.title} </td>
                  <td> {order?.email} </td>
                  <td> {order?.status} </td>
                  <td>
                    {order.status === "Pending" && (
                      <button onClick={() => handleApproval(order._id)}>
                        Approve
                      </button>
                    )}
                  </td>
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

export default ManageAllOrders;
