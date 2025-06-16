import { FaChevronRight, FaNodeJs, FaReact } from "react-icons/fa6";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import {
  SiExpress,
  SiKeras,
  SiNumpy,
  SiPandas,
  SiScikitlearn,
  SiTensorflow,
} from "react-icons/si";

const Libraries = ({ hidden }) => {
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
        Libraries and Frameworks
      </h1>
      <div style={{ paddingLeft: "40px" }}>
        <div>
          <div className="my-1 flex items-center">
            <SiPandas className="size-6 inline-block text-white" />
            &nbsp;Pandas
          </div>
          <div className="my-1 flex items-center">
            <SiNumpy className="size-6 inline-block text-blue-500" />
            &nbsp;NumPy
          </div>
          <div className="my-1 flex items-center">
            <SiScikitlearn className="size-6 inline-block text-blue-500" />
            &nbsp;Scikit-learn
          </div>
          {/* <div className="my-1 flex items-center">
            <SiPytorch className="size-6 inline-block text-blue-500" />
            &nbsp;Pytorch
          </div> */}
          <div className="my-1 flex items-center">
            <SiTensorflow className="size-6 inline-block text-blue-500" />
            &nbsp;Tensorflow
          </div>
          <div className="my-1 flex items-center">
            <SiKeras className="size-6 inline-block text-blue-500" />
            &nbsp;Keras
          </div>
        </div>
        <div>
          <div className="my-1 flex items-center">
            <SiExpress className="size-6 inline-block text-white" />
            &nbsp;Express
          </div>
          <div className="my-1 flex items-center">
            <FaReact className="size-6 inline-block text-blue-500" />
            &nbsp;React
          </div>
          <div className="my-1 flex items-center">
            <FaNodeJs className="size-6 inline-block text-green-500" />
            &nbsp;NodeJS
          </div>
          <div className="my-1 flex items-center">
            <RiNextjsFill className="size-6 inline-block text-white" />
            &nbsp;NextJS
          </div>
          <div className="my-1 flex items-center">
            <RiTailwindCssFill className="size-6 inline-block text-blue-500" />
            &nbsp;Tailwind
          </div>
        </div>
      </div>
    </div>
  );
};

export default Libraries;
