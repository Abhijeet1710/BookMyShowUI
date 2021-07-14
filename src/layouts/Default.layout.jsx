import React from "react";
import HeroCorousal from "../components/HeroCorousal/HeroCorousal.components";
import Navbar from "../components/navbar/navbar.components";

const DefaultLayout = (props) => {
  return (
    <>
      <Navbar />
      <HeroCorousal />
      {props.children}
    </>
  );
};

export default DefaultLayout;
