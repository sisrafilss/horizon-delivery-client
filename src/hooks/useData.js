import axios from "axios";
import { useEffect, useState } from "react";

const useData = () => {
  // Store Seriveces
  const [services, setServices] = useState([]);
  // Saved Latest Blogs
  const [blogs, setBlogs] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  // Loading services from server
  useEffect(() => {
    setIsLoading(true);
    axios
      .get("https://immense-journey-09745.herokuapp.com/highlighted-services")
      .then((res) => setServices(res.data))
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  // Loading latest blogs from server
  useEffect(() => {
    setIsLoading(true);
    axios
      .get("https://immense-journey-09745.herokuapp.com/latest-blogs")
      .then((res) => setBlogs(res.data))
      .finally(() => setIsLoading(false));
  }, []);

  return {
    services,
    blogs,
    isLoading,
  };
};

export default useData;
