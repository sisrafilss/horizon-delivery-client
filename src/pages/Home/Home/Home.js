import React from "react";
import SectionTop from "../../Shared/SectionTop/SectionTop";
import Banner from "../Banner/Banner";
import GreetingUser from "../GreetingUser/GreetingUser";
import HighlightedBlogs from "../HighlightedBlogs/HighlightedBlogs";
import HightlightedService from "../HightlightedService/HightlightedService";

const Home = () => {
  return (
    <div>
      <Banner />
      <GreetingUser />
      <HightlightedService />
      <HighlightedBlogs />
    </div>
  );
};

export default Home;
