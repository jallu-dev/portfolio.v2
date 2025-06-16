import { useState } from "react";
import { FaChevronRight } from "react-icons/fa6";
import { SiGmail, SiWhatsapp, SiGithub, SiLinkedin } from "react-icons/si";
import emailjs, { EmailJSResponseStatus } from "@emailjs/browser";
import { HiOutlineExternalLink } from "react-icons/hi";
import LoaderIcon from "../../assets/icons/LoaderIcon";
const Contacts = () => {
  const [formData, setFormData] = useState({ email: "", message: "" });
  const [sending, setSending] = useState(false);

  const onChangeHandler = (e) => {
    setFormData((curData) => {
      return {
        ...curData,
        [e.target.id]: e.target.value,
      };
    });
  };

  const onFormSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    try {
      await emailjs.send("service_lvc5c3x", "contact_form", formData, {
        publicKey: "EgijDoBvRDvZ9GyYw",
      });
      console.log("SUCCESS!");
      setFormData((curData) => {
        return { email: "", message: "" };
      });
    } catch (err) {
      if (err instanceof EmailJSResponseStatus) {
        console.log("EMAILJS FAILED...", err);
        return;
      }

      console.log("ERROR", err);
    } finally {
      setSending(false);
    }
  };

  return (
    <>
      <h1 className="text-zinc-300 font-bold flex mb-3">
        <FaChevronRight className="relative text-sm top-1" />{" "}
        <FaChevronRight className="relative text-sm top-1" />
        <a
          href="mailto:zahranliyasdeen@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-block",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            width: "100%",
          }}
        >
          <SiGmail className="size-5 inline-block text-red-500 mx-1 align-top" />
          &nbsp;zahranliyasdeen@gmail.com
        </a>
        <a
          href="mailto:zahranliyasdeen@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <HiOutlineExternalLink className="size-6 inline-block  mx-1" />
        </a>
      </h1>
      <h1 className="text-zinc-300 font-bold flex mb-3">
        <FaChevronRight className="relative text-sm top-1" />{" "}
        <FaChevronRight className="relative text-sm top-1" />
        <a
          href="http://wa.me/+94768277881"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-block",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            width: "100%",
          }}
        >
          <SiWhatsapp className="size-5 inline-block text-green-500 mx-1 align-top" />
          &nbsp;+94768277881
        </a>
        <a
          href="http://wa.me/+94768277881"
          target="_blank"
          rel="noopener noreferrer"
        >
          <HiOutlineExternalLink className="size-6 inline-block  mx-1" />
        </a>
      </h1>
      <h1 className="text-zinc-300 font-bold flex mb-3">
        <FaChevronRight className="relative text-sm top-1" />{" "}
        <FaChevronRight className="relative text-sm top-1" />
        <a
          href="https://github.com/jallu-dev"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-block",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            width: "100%",
          }}
        >
          <SiGithub className="size-5 inline-block text-purple-500 mx-1 align-top" />
          &nbsp;github.com/jallu-dev
        </a>
        <a
          href="https://github.com/jallu-dev"
          target="_blank"
          rel="noopener noreferrer"
        >
          <HiOutlineExternalLink className="size-6 inline-block  mx-1" />
        </a>
      </h1>

      <h1 className="text-zinc-300 font-bold flex mb-3">
        <FaChevronRight className="relative text-sm top-1" />{" "}
        <FaChevronRight className="relative text-sm top-1" />
        <a
          href="https://www.linkedin.com/in/zahran-liyasdeen/"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-block",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            width: "100%",
          }}
        >
          <SiLinkedin className="size-5 inline-block text-blue-700 mx-1 align-top" />
          &nbsp;linkedin.com/in/zahran-liyasdeen
        </a>
        <a
          href="https://www.linkedin.com/in/zahran-liyasdeen/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <HiOutlineExternalLink className="size-6 inline-block  mx-1" />
        </a>
      </h1>
      <form onSubmit={onFormSubmit}>
        <input
          onChange={(e) => onChangeHandler(e)}
          value={formData.email}
          id="email"
          autoComplete="off"
          placeholder="Your email address"
          className="w-full text-zinc-300 placeholder:text-zinc-300 border border-zinc-500 bg-transparent rounded-md mt-4 mb-2 inline-block px-5 py-2 outline-none"
        />
        <textarea
          onChange={(e) => onChangeHandler(e)}
          value={formData.message}
          id="message"
          placeholder="Say something"
          aria-expanded={false}
          className="w-full text-zinc-300 placeholder:text-zinc-300 border border-zinc-500 bg-transparent rounded-md h-32 inline-block px-5 py-2 outline-none"
        ></textarea>
        <button className="font-bold bg-gradient-to-tr from-red-400 via-orange-400 to-rose-400 p-[2px] rounded-md text-zinc-300 outline-none w-full text-center">
          <div className="bg-zinc-900 w-full h-full rounded-md px-5 py-2 flex justify-center items-center text-red-400">
            <LoaderIcon sending={sending} />
            {sending ? "" : "Send"}
          </div>
        </button>
      </form>
    </>
  );
};

export default Contacts;
