import React from "react";
import module from "./MyMarker.module.css";
import MarkerIcon from "../../Assets/icon-location.svg"

const MyMarker = ({ text, tooltip, $hover }) => {


  return <img id={module.MapMarker} src={MarkerIcon}></img>;
};

export default MyMarker;
