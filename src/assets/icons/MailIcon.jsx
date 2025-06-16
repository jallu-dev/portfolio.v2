import React from "react";
import Lottie from "lottie-react";
import Mail from "./MailIcon.json";

const MailIcon = () => {
  return (
    <div style={{ width: "40px", height: "40px" }}>
      <Lottie animationData={Mail} />
    </div>
  );
};

export default MailIcon;
