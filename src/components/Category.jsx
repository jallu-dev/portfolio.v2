import { useRef, useState, useEffect } from "react";
import { FaUserGraduate } from "react-icons/fa";
import { BiPlusCircle } from "react-icons/bi";
import { PiCertificateBold } from "react-icons/pi";
import { FaGears, FaMedal } from "react-icons/fa6";
import { IoChatbubbleEllipsesSharp } from "react-icons/io5";
import WrenchIcon from "../assets/icons/WrenchIcon";
import { BulbIcon } from "../assets/icons/BulbIcon";
import ConfettiIcon from "../assets/icons/ConfettiIcon";
import StarIcon from "../assets/icons/StarIcon";
import MailIcon from "../assets/icons/MailIcon";
import RocketIcon from "../assets/icons/RocketIcon";
import GraphIcon from "../assets/icons/GraphIcon";

const Category = ({
  id,
  onCancelClick,
  onSectionClick,
  active,
  name,
  childrenComponents,
}) => {
  const contentRef = useRef(null);
  const [height, setHeight] = useState("0px");
  const [showCount, setShowCount] = useState(
    childrenComponents.length >= 2 ? 2 : childrenComponents.length
  );

  const onShowmoreClicked = () => {
    setShowCount((count) =>
      count + 2 > childrenComponents.length
        ? childrenComponents.length
        : count + 2
    );
  };

  useEffect(() => {
    if (active === id) {
      setHeight(`${contentRef.current.scrollHeight + (active ? 20 : 0)}px`);
    } else {
      setHeight("0px");
      setShowCount((count) =>
        childrenComponents.length >= 2 ? 2 : childrenComponents.length
      );
    }
  }, [active, id, showCount]);

  return (
    <div
      className={`w-full sm:max-w-lg lg:max-w-[80%] px-1 py-1 shadow-lg my-2 rounded-xl ${
        active === id
          ? "bg-gradient-to-tr from-red-400 via-orange-400 to-rose-400 text-zinc-300"
          : "bg-zinc-500 hover:bg-zinc-300 text-zinc-500 hover:text-zinc-300 cursor-pointer"
      }`}
      style={{
        transition: "color 0.1s ease",
        WebkitTransition: "color 0.1s ease",
        MozTransition: "color 0.1s ease",
        msTransition: "color 0.1s ease",
        OTransition: "color 0.1s ease",
      }}
      id={id}
      onClick={onSectionClick}
    >
      <div className="flex flex-col justify-between rounded-xl bg-zinc-900 py-2 px-4">
        <div
          className={`flex justify-between text-2xl items-center ${
            active === id ? "text-red-400" : ""
          }`}
        >
          {name == "Education" ? (
            <BulbIcon />
          ) : name == "Experience" ? (
            <GraphIcon />
          ) : name == "Certifications" ? (
            <ConfettiIcon />
          ) : name == "Recognitions" ? (
            <StarIcon />
          ) : name == "Technical Skills" ? (
            <WrenchIcon />
          ) : name == "Projects" ? (
            <RocketIcon />
          ) : name == "Contacts" ? (
            <MailIcon />
          ) : (
            ""
          )}

          <span style={{ fontSize: "20px" }}>{name}</span>
          <BiPlusCircle
            onClick={onCancelClick}
            className={`size-8 ${
              active === id ? "text-rose-400 rotate-45 cursor-pointer" : ""
            }`}
            style={{
              transition: "all 0.3s ease",
              WebkitTransition: "all 0.3s ease",
              MozTransition: "all 0.3s ease",
              msTransition: "all 0.3s ease",
              OTransition: "all 0.3s ease",
            }}
          />
        </div>

        <div
          ref={contentRef}
          style={{
            height,
            transition: "height 0.5s ease",
            overflow: "hidden",
          }}
        >
          <div
            className={`${
              active === id ? "opacity-100 my-3" : "opacity-0 my-0"
            } transition-all duration-500 text-md text-zinc-400`}
          >
            {childrenComponents.map((Child, ind) =>
              ind < showCount ? (
                <Child key={ind} />
              ) : (
                <Child key={ind} hidden={true} />
              )
            )}
          </div>
        </div>
        <h3
          onClick={onShowmoreClicked}
          className={`text-red-400 flex justify-center ${
            active !== id || showCount == childrenComponents.length
              ? "h-0 overflow-hidden opacity-0"
              : "opacity-100"
          }`}
          style={{
            transition: "opacity 0.5s ease",
            WebkitTransition: "opacity 0.5s ease",
            MozTransition: "opacity 0.5s ease",
            msTransition: "opacity 0.5s ease",
            OTransition: "opacity 0.5s ease",
          }}
        >
          <span className="cursor-pointer">Show more</span>
        </h3>
      </div>
    </div>
  );
};

export default Category;
