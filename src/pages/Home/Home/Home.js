import React from "react";
import SectionTop from "../../Shared/SectionTop/SectionTop";
import Banner from "../Banner/Banner";
import GreetingUser from "../GreetingUser/GreetingUser";

const Home = () => {
  // Section Top props object
  const sectionTop = {
    title: "We Are Shipping Solution",
    subtitle:
      "Curabitur non eleifend lacus. Proin dictum sem ut purus luctus posuere id vel velit. Fusce non augue sit amet tellus finibus aliquam.",
  };
  return (
    <div>
      <Banner />
      <div style={{ marginTop: "80px" }}>
        <div className="container">
          <SectionTop sectionTop={sectionTop} />
        </div>
      </div>
      <div style={{marginBottom: '80px'}}>
      <GreetingUser />
      </div>
    </div>
  );
};

export default Home;
