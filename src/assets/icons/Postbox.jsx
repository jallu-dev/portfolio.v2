import React from "react";
import Lottie from "lottie-react";
import Post from "./Postbox.json";

const Postbox = ({ sending }) => {
  return (
    <div
      style={{
        width: "40px",
        height: "40px",
      }}
    >
      <Lottie animationData={Post} loop={sending} />
    </div>
  );
};

export default Postbox;
