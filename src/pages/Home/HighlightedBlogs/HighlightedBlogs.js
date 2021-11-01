import axios from "axios";
import React, { useState } from "react";
import { Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import SectionTop from "../../Shared/SectionTop/SectionTop";
import SingleBlog from "../../Shared/SingleBlog/SingleBlog";

const HighlightedBlogs = () => {
  const [blogs, setBlogs] = useState([]);

  axios
    .get("https://immense-journey-09745.herokuapp.com/latest-blogs")
    .then((res) => setBlogs(res.data));

  // Section Top props object
  const sectionTop = {
    title: "Latest Post You Must Read",
    subtitle: "Cehckout our latest blog for medical news and health trick",
  };

  return (
    <div style={{ marginTop: "70px" }}>
      <div className="container">
        <SectionTop sectionTop={sectionTop} />
      </div>

      <div className="mb-5">
        <Container>
          <Row xs={1} md={3} className="g-4">
            {blogs.map((blog) => (
              <SingleBlog key={blog._id} blog={blog} />
            ))}
          </Row>
          {/* This Button is Static */}
          <div className="mt-5 d-grid">
            <Link className="btn btn-load-more" to="#">
              Load More
            </Link>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default HighlightedBlogs;
