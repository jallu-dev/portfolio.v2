import React from "react";
import Lottie from "lottie-react";
import Loader from "./LoaderIcon.json";

const LoaderIcon = ({ sending }) => {
  return (
    <div
      style={{
        height: "40px",
        display: "inline-block",
        opacity: sending ? "100%" : "0%",
        width: sending ? "40px" : "1px",
      }}
    >
      <Lottie animationData={Loader} />
    </div>
  );
};

export default LoaderIcon;
