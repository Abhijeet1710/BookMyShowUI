import React from "react";
import Slider from "react-slick";
import settings from "../../config/PosterCorousal.config";
import Poster from "../poster/Poster.components";

export const PosterSlider = (props) => {
  return (
    <>
      <div className="flex flex-col items-start">
        <h3
          className={`text-white text-2xl font-bold my-4 ${
            props.isDark ? "text-white" : "text-gray-700"
          }`}
        >
          {props.title}
        </h3>
        <p
          className={`text-white text-sm ${
            props.isDark ? "text-white" : "text-gray-700"
          }`}
        >
          {props.subTitles}
        </p>
      </div>
      <Slider {...settings}>
        {props.images.map((image) => (
          <Poster {...image} isDark={props.isDark} />
        ))}
      </Slider>
    </>
  );
};
