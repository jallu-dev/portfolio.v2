import { FaChevronRight } from "react-icons/fa6";

const Powersoft = ({ hidden }) => {
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
        Powersoft (PVT) LTD
      </h1>
      <div style={{ paddingLeft: "40px" }}>
        <p>Intern Software Engineer</p>
        <p>Sep 2022 – Dec 2022</p>
        <p>Worked On xPower Project</p>
      </div>
    </div>
  );
};

export default Powersoft;
