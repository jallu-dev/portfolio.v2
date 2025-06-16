import frontendc from "../../assets/frontendc.png";
import { FaChevronRight } from "react-icons/fa6";
import Button from "../Button";

const FrontendMora = ({ hidden }) => {
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
        Front-End Web Development
      </h1>
      <div className=" pl-10">
        <p>
          <img
            src={frontendc}
            alt="Front-End Web Development Certificate"
            className="inline-block w-full max-w-96 "
          />
        </p>
        <div>
          <p className="my-1">
            Offered By
            <a
              href="https://uom.lk/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="University of Moratuwa (opens in new tab)"
              className="roboto-mono-bold"
            >
              &nbsp;University of Moratuwa
            </a>
          </p>
          <p className="my-1">
            Verification Code
            <span className="roboto-mono-bold"> Cewqs0zwKh</span>
          </p>{" "}
          <Button content="Verify" link="https://open.uom.lk/verify" />
        </div>
      </div>
    </div>
  );
};

export default FrontendMora;
