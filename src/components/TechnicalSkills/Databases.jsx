import { FaChevronRight } from "react-icons/fa6";
import { RiFirebaseFill } from "react-icons/ri";
import { SiMongodb, SiMysql } from "react-icons/si";

const Databases = ({ hidden }) => {
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
        Databases
      </h1>
      <div style={{ paddingLeft: "40px" }}>
        <div className="my-1 flex">
          <SiMongodb className="size-6 inline-block text-green-500" />
          &nbsp;MongoDB
        </div>
        <div className="my-1 flex">
          <SiMysql className="size-6 inline-block text-blue-500" />
          &nbsp;MySQL
        </div>
        <div className="my-1 flex">
          <RiFirebaseFill className="size-6 inline-block text-yellow-500" />
          &nbsp;Firebase
        </div>
      </div>
    </div>
  );
};

export default Databases;
