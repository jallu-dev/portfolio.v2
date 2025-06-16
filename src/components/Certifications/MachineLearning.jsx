import MLSpecialization from "../../assets/MLSpecialization.jpg";
import { FaChevronRight } from "react-icons/fa6";
import Button from "../Button";

const MachineLearning = ({ hidden }) => {
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
        Machine Learning Specialization
      </h1>
      <div style={{ paddingLeft: "40px" }}>
        <p>
          <img
            src={MLSpecialization}
            alt="Machine Learning Specialization"
            className="inline-block w-full max-w-96 "
          />
        </p>
        <div>
          <p className="my-1">
            Offered By
            <a
              href="https://www.deeplearning.ai/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="DeepLearning.AI (opens in new tab)"
              className="roboto-mono-bold"
            >
              &emsp;DeepLearning.AI&emsp;
            </a>
            &amp;
            <a
              href="https://online.stanford.edu/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Stanford university (opens in new tab)"
              className="roboto-mono-bold"
            >
              &emsp;Stanford Online&emsp;
            </a>
          </p>
          <Button
            content="Verify"
            link="https://coursera.org/verify/specialization/284RS4A0Y9OH"
          />
        </div>
      </div>
    </div>
  );
};

export default MachineLearning;
