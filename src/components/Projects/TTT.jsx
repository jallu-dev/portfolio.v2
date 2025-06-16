import React from "react";
import { FaChevronRight } from "react-icons/fa6";
import Button from "../Button";
import { SiCsharp, SiDotnet } from "react-icons/si";

const TTT = ({ hidden }) => {
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
        3T Shooting Game
      </h1>
      <div style={{ paddingLeft: "40px" }}>
        <p>
          <iframe
            className="inline-block w-full max-w-96 aspect-video"
            src="https://www.youtube.com/embed/N_czJfIRY4w?si=t0Hc6uLPb-aP1lIJ"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </p>
        <div>
          <div className="my-1">
            Tiny Target Tussle (3T), a simple shooting game developed using the
            C# programming language in Visual Studio
            <div className="flex gap-2 my-2">
              <SiCsharp className="text-purple-500 text-xl" />
              <SiDotnet className="text-sky-500 text-xl" />
            </div>
            <Button
              content="Github Repo"
              link="https://github.com/jallu-dev/3T"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TTT;
