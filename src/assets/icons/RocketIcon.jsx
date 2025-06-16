import React from "react";
import Lottie from "lottie-react";
import Rocket from "./RocketIcon.json";

const RocketIcon = () => {
  return (
    <div style={{ width: "40px", height: "40px" }}>
      <Lottie animationData={Rocket} />
    </div>
  );
};

export default RocketIcon;
