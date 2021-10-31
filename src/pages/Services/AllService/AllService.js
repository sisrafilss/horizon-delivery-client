import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import SingleService from "../SingleService/SingleService";

const AllService = () => {
  const [services, setServices] = useState([]);
  const [isAdd, setIsAdd] = useState(false);

  useEffect(() => {
    axios
      .get("https://immense-journey-09745.herokuapp.com/services")
      .then((res) => setServices(res.data));
  }, [isAdd]);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset
  } = useForm();

  const onSubmit = (data) => {
      axios.post('https://immense-journey-09745.herokuapp.com/services', data)
      .then(res => {
          if (res.data.insertedId) {
              alert('Successfully Added!');
            reset();
            setIsAdd(true);
          }
      } );
  };

  return (
    <div>
      <div style={{marginTop: '30px'}}>
        <form onSubmit={handleSubmit(onSubmit)}>
          
          <input  {...register("name")} placeholder="Name" />

          
          <input {...register("description", { required: true })} placeholder="description" />
          
          {errors.exampleRequired && <span>This field is required</span>}

          <input type="submit" value="Add" />
        </form>
      </div>
      <h1>All Service: {services.length} </h1>
      <div>
        {services.map((service) => (
          <SingleService key={service._id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default AllService;
