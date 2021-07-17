import React from "react";
import Navbar from "../components/navbar/navbar.components";

const MovieLayout = (props) => {
  return (
    <>
      <Navbar />
      {props.children}
    </>
  );
};

export default MovieLayout;
