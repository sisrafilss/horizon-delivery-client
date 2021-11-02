import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import PageTopTitle from "../Shared/PageTopTitle/PageTopTitle";

const AddANewService = () => {
  // Page top Title props object
  const pageTopTitle = {
    title: "Add a New Service",
    subtitle: "Admin can Add a new Service",
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
      .post('http://localhost:5000/add-a-new-service', data)
      .then((res) => {
          if (res.data?.insertedId) {
              alert('Service added Successfully. Take a look at services page to check.')
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
      <div>
        <div className="form-container">
          <div>
            <h2 className="mb-3">Insert Service Detail</h2>
          </div>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
              <label className="form-label">Service Title</label>
              <input
                type="text"
                className="form-control"
                placeholder="Service Title"
                {...register("title", { required: true })}
              />
              {errors.title && (
                <span className="text-danger">This field is required</span>
              )}
            </div>

            <div className="mb-3">
              <label className="form-label">Description</label>
              <textarea
                className="form-control"
                rows="3"
                placeholder="Service Description"
                {...register("description", { required: true })}
              ></textarea>
              {errors.description && (
                <span className="text-danger">This field is required</span>
              )}
            </div>

            <div className="mb-3">
              <label className="form-label">Image URL</label>
              <input
                type="text"
                className="form-control"
                placeholder="Service Image URL"
                {...register("img", { required: true })}
              />
              {errors.img && (
                <span className="text-danger">This field is required</span>
              )}
            </div>

            
            <input
              type="submit"
              className="btn btn-info fw-bold"
              value="Add"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddANewService;
