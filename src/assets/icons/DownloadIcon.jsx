import React from "react";
import Lottie from "lottie-react";
import Download from "./DownloadIcon.json";

const DownloadIcon = () => {
  return (
    <div style={{ width: "25px", height: "25px" }}>
      <Lottie animationData={Download} />
    </div>
  );
};

export default DownloadIcon;
