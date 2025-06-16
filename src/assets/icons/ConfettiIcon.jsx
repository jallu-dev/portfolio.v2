import React from "react";
import Lottie from "lottie-react";
import Confetti from "./ConfettiIcon.json";

const ConfettiIcon = () => {
  return (
    <div style={{ width: "40px", height: "40px" }}>
      <Lottie animationData={Confetti} />
    </div>
  );
};

export default ConfettiIcon;
