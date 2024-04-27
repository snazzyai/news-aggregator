import React from "react";
import useGetNews from "hooks/useGetNews";

const Home = () => {
  const { data } = useGetNews();

  return <div>{data}</div>;
};

export default Home;
