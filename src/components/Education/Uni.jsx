import { FaChevronRight } from "react-icons/fa6";

const Uni = ({ hidden }) => {
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
        BSc in Information Technology
      </h1>
      <div style={{ paddingLeft: "40px" }}>
        <p>University of Jaffna</p>
        <p>Oct 2022 - July 2025</p>
      </div>
    </div>
  );
};

export default Uni;
