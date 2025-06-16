import React from "react";
import Lottie from "lottie-react";
import Bulb from "./BulbIcon.json";

export const BulbIcon = () => {
  return (
    <div style={{ width: "40px", height: "40px" }}>
      <Lottie animationData={Bulb} />
    </div>
  );
};
