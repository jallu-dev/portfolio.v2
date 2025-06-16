import cs50c from "../../assets/CS50xc.png";
import { FaChevronRight } from "react-icons/fa6";
import Button from "../Button";

const Cs50x = ({ hidden }) => {
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
        CS50x: Introduction to Computer Science
      </h1>
      <div style={{ paddingLeft: "40px" }}>
        <p>
          <img
            src={cs50c}
            alt="CS50x: Introduction to Computer Science Certificate"
            className="inline-block w-full max-w-96"
          />
        </p>
        <div>
          <p className="my-1">
            Offered By
            <a
              href="https://www.harvard.edu/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="University of Vavuniya (opens in new tab)"
              className="roboto-mono-bold"
            >
              &nbsp;Harvard University
            </a>
          </p>{" "}
          <Button
            content="Verify"
            link="https://cs50.harvard.edu/certificates/b920609f-e1bd-4877-87ae-2cbfb7e28493"
          />
        </div>
      </div>
    </div>
  );
};

export default Cs50x;
