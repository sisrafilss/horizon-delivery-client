import React from "react";
import SectionTop from "../../Shared/SectionTop/SectionTop";
import Banner from "../Banner/Banner";
import GreetingUser from "../GreetingUser/GreetingUser";
import HightlightedService from "../HightlightedService/HightlightedService";

const Home = () => {
  return (
    <div>
      <Banner />
      <GreetingUser />
      <HightlightedService />
    </div>
  );
};

export default Home;
