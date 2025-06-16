import React from "react";
import Lottie from "lottie-react";
import Star from "./StarIcon.json";

const StarIcon = () => {
  return (
    <div style={{ width: "40px", height: "40px" }}>
      <Lottie animationData={Star} />
    </div>
  );
};

export default StarIcon;
