import { BiArrowToBottom } from "react-icons/bi";
import { FaLinkedin, FaSquareGithub } from "react-icons/fa6";
import DownloadIcon from "../assets/icons/DownloadIcon";

const Header = () => {
  return (
    <div
      className="w-full flex justify-between items-center my-3 shrink-0"
      style={{ transition: "color 0.1s ease" }}
    >
      <div className="flex">
        <a
          href="https://github.com/jallu-dev"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaSquareGithub className="size-8 text-orange-400 hover:text-zinc-300 transition-colors cursor-pointer mx-1" />
        </a>
        <a
          href="https://www.linkedin.com/in/zahran-liyasdeen/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="size-8 text-orange-400 hover:text-zinc-300 transition-colors cursor-pointer mx-1" />
        </a>
      </div>
      <div className=" bg-gradient-to-tr from-red-400 via-orange-400 to-rose-400 p-1 shadow-lg rounded-xl">
        <a
          href="https://drive.google.com/file/d/1p3YUhAmXrT0QFYZCUeE03fdK4Qv6B3YT/view?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
          className="text-zinc-500 hover:text-zinc-300 px-2 py-1 text-md flex items-center
           bg-zinc-900  rounded-xl uppercase transition-colors"
        >
          Resume&nbsp;
          <DownloadIcon />
        </a>
      </div>
    </div>
  );
};

export default Header;
