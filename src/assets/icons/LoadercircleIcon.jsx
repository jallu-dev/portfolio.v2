import React from "react";
import Lottie from "lottie-react";
import Loadercircle from "./LoadercircleIcon.json";

const LoadercircleIcon = () => {
  return (
    <div style={{ width: "40px", height: "40px" }}>
      <Lottie animationData={Loadercircle} />
    </div>
  );
};

export default LoadercircleIcon;
