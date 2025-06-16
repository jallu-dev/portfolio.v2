import codezparkc from "../../assets/codezparkc.png";
import { FaChevronRight } from "react-icons/fa6";
import Button from "../Button";

const Codezpark = ({ hidden }) => {
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
        Codezpark v6.0 Level 1 Winner
      </h1>
      <div style={{ paddingLeft: "40px" }}>
        <p>
          <img
            src={codezparkc}
            alt="Codezpark Certificate"
            className="inline-block w-full max-w-96"
          />
        </p>
        <div>
          <p className="my-1">
            A Hackathon Competition, Organized By
            <a href="https://fas.vau.ac.lk/ictcs/" className="text-blue-300">
              &nbsp;ITC<span className="text-orange-300">S</span>
            </a>
            ,
            <a
              href="https://vau.ac.lk/"
              target="_blank"
              rel="noopener noreferrer"
              className="roboto-mono-bold"
            >
              &nbsp;University of Vavuniya
            </a>
          </p>{" "}
          <p className="my-1">
            Verification Code
            <span className="roboto-mono-bold"> UOVITCS20230001</span>
          </p>{" "}
          <Button
            content="Verify"
            link="http://apps.vau.ac.lk/verifycertificate?certid=UOVITCS20230001"
          />
        </div>
      </div>
    </div>
  );
};

export default Codezpark;
