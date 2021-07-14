import React from "react";
import Navbar from "../components/navbar/navbar.components";

const DefaultLayout = (props) => {
  return (
    <>
      <Navbar />
      {props.children}
    </>
  );
};

export default DefaultLayout;
