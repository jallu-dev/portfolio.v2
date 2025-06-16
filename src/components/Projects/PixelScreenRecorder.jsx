import React from "react";
import Button from "../Button";
import { FaChevronRight } from "react-icons/fa6";
import { SiReact, SiRust, SiTailwindcss, SiTauri } from "react-icons/si";

const PixelScreenRecorder = ({ hidden }) => {
  return (
    <div className={`${hidden ? "h-0 overflow-hidden" : ""}`}>
      <h1
        className="text-zinc-300 font-bold"
        style={{
          display: "inline-block",
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          width: "100%",
          verticalAlign: "top",
        }}
      >
        <FaChevronRight className="relative text-sm inline-block align-baseline" />
        <FaChevronRight className="relative text-sm inline-block align-baseline" />
        Pixel Screen Recorder
      </h1>
      <div style={{ paddingLeft: "40px" }}>
        <p>
          <iframe
            className="inline-block w-full max-w-96 aspect-video"
            src="https://www.youtube.com/embed/yUx3GTRxi0c?si=EgIk1n5iwIb8uvFS"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </p>
        <div>
          <div className="my-1">
            Cross-platform desktop app build using Tauri, combining frontend
            libraries with a Rust backend, and leveraging FFmpeg for video
            recording and editing. Edit your videos with features like muting,
            speed change, trimming, and cropping. It also offers smooth pause
            and resume functionality for flexible recording sessions.
            <div className="flex gap-2 my-2">
              <SiTauri className="text-sky-500 text-xl" />
              <SiRust className="text-orange-500 text-xl" />
              <SiReact className="text-sky-500 text-xl" />
              <SiTailwindcss className="text-sky-500 text-xl" />
            </div>
            <Button
              content="Github Repo"
              link="https://github.com/jallu-dev/pixel-screen-recorder"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PixelScreenRecorder;
