import React from "react";
import Lottie from "lottie-react";
import wrenchIcon from "./WrenchIcon.json";

const WrenchIcon = () => {
  return (
    <div style={{ width: "40px", height: "40px" }}>
      <Lottie animationData={wrenchIcon} />
    </div>
  );
};

export default WrenchIcon;
