import { FaChevronRight, FaPython } from "react-icons/fa6";
import { RiJavascriptFill } from "react-icons/ri";

const ProgrammingLanguages = ({ hidden }) => {
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
        Programming Languages
      </h1>
      <div style={{ paddingLeft: "40px" }}>
        <div className="my-1 flex">
          <FaPython className="size-6 inline-block text-blue-500" />
          &nbsp;Python
        </div>
        <div className="my-1 flex">
          <RiJavascriptFill className="size-6 inline-block text-yellow-500" />
          &nbsp;JavaScript
        </div>
      </div>
    </div>
  );
};

export default ProgrammingLanguages;
