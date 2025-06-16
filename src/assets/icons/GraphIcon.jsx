import React from "react";
import Lottie from "lottie-react";
import Graph from "./GraphIcon.json";

const GraphIcon = () => {
  return (
    <div style={{ width: "40px", height: "40px" }}>
      <Lottie animationData={Graph} />
    </div>
  );
};

export default GraphIcon;
