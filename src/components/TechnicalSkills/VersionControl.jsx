import { FaChevronRight, FaGitAlt } from "react-icons/fa6";

const VersionControl = ({ hidden }) => {
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
        Version Control
      </h1>
      <div style={{ paddingLeft: "40px" }}>
        <div className="my-1 flex">
          <FaGitAlt className="size-6 inline-block text-orange-500" />
          &nbsp;Git
        </div>
      </div>
    </div>
  );
};

export default VersionControl;
