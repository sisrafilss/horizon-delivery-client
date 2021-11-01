import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Container, Form, Row, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";
import useAuth from "../../hooks/useAuth";
import PageTopTitle from "../Shared/PageTopTitle/PageTopTitle";
import "./PlaceOrder.css";

const PlaceOrder = () => {
  const [serviceDetail, setServiceDetail] = useState();
  const { user } = useAuth();

  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`http://localhost:5000/placeOrder/${id}`)
      .then((res) => setServiceDetail(res.data));
  }, []);

  const pageTopTitle = {
    title: "Order Detail",
    subtitle: "Please take a look and Place an order by filling up the form.",
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();
  const onSubmit = (data) => {
        console.log(data);
    axios
      .post(`http://localhost:5000/placeOrder/${id}`, data)
      .then((res) => {
          if (res.data?.insertedId) {
              alert('Order Place Successfully. Please check My Order from the top menu to see all of your orders.')
            reset();
          }
          else {
            alert(res.data?.caused);
            reset();
          }
      });
  };

  return (
    <div>
      <div>
        <PageTopTitle pageTopTitle={pageTopTitle} />
      </div>

      <div className="form-container">
        <h2 className="mb-3"> {serviceDetail?.title} </h2>
        <div className="my-5">
          <img src={serviceDetail?.img} className="img-fluid" alt="" />
        </div>
        <div>
          <p> {serviceDetail?.description} </p>
        </div>
      </div>

      <div>
        <div className="form-container">
          <div>
            <h2>Details About</h2>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
              <label className="form-label">Full Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Full Name"
                defaultValue={user?.displayName}
                {...register("name", { required: true })}
              />
              {errors.name && (
                <span className="text-danger">This field is required</span>
              )}
            </div>

            <div className="mb-3">
              <label className="form-label">Email address</label>
              <input
                type="email"
                className="form-control"
                placeholder="Email"
                defaultValue={user.email}
                {...register("email", { required: true })}
              />
              {errors.email && (
                <span className="text-danger">This field is required</span>
              )}
            </div>
            <div className="mb-3">
              <label className="form-label">Full Address</label>
              <textarea
                className="form-control"
                rows="3"
                placeholder="Enter Full Address"
                {...register("address", { required: true })}
              ></textarea>
              {errors.address && (
                <span className="text-danger">This field is required</span>
              )}
            </div>

            <div className="mb-3">
              <label className="form-label">City</label>
              <input
                type="text"
                className="form-control"
                placeholder="City name"
                {...register("city", { required: true })}
              />
              {errors.city && (
                <span className="text-danger">This field is required</span>
              )}
            </div>

            <div className="mb-3">
              <label className="form-label">Phone</label>
              <input
                type="text"
                className="form-control"
                placeholder="Phone number"
                {...register("phone", { required: true })}
              />
              {errors.phone && (
                <span className="text-danger">This field is required</span>
              )}
            </div>

            <input
              type="submit"
              className="btn btn-info fw-bold"
              value="Place Order"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;
