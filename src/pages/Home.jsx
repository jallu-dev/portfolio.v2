import { useEffect, useState } from "react";

import Uni from "../components/Education/Uni";
import Category from "../components/Category";
import Cs50x from "../components/Certifications/Cs50x";
import FrontendMora from "../components/Certifications/FrontendMora";
import MachineLearning from "../components/Certifications/MachineLearning";
import Codezpark from "../components/Recognitions/Codezpark";
import ProgrammingLanguages from "../components/TechnicalSkills/ProgrammingLanguages";
import Libraries from "../components/TechnicalSkills/Libraries";
import Databases from "../components/TechnicalSkills/Databases";
import VersionControl from "../components/TechnicalSkills/VersionControl";
import Header from "../components/Header";
import HeroBox from "../components/HeroBox";
import Contacts from "../components/Contacts/Contacts";
import TTT from "../components/Projects/TTT";
import Powersoft from "../components/Experience/Powersoft";
import PixelScreenRecorder from "../components/Projects/PixelScreenRecorder";

const Home = () => {
  const [active, setActive] = useState("");

  const educationChildren = [Uni];
  const experienceChildren = [Powersoft];
  const certificationsChildren = [MachineLearning, Cs50x, FrontendMora];
  const recognitionsChildren = [Codezpark];
  const technicalSkillsChildren = [
    ProgrammingLanguages,
    Libraries,
    Databases,
    VersionControl,
  ];
  const projectsChildren = [TTT, PixelScreenRecorder];
  const contactsChildren = [Contacts];

  const categories = [
    { name: "Education", children: educationChildren },
    { name: "Experience", children: experienceChildren },
    { name: "Certifications", children: certificationsChildren },
    { name: "Recognitions", children: recognitionsChildren },
    { name: "Technical Skills", children: technicalSkillsChildren },
    { name: "Projects", children: projectsChildren },
    { name: "Contacts", children: contactsChildren },
  ];

  const onSectionClick = (e) => {
    setActive(active === e.currentTarget.id ? active : e.currentTarget.id);
  };

  const onCancelClick = (e) => {
    e.stopPropagation();
    let parentId = e.currentTarget.parentElement.parentElement.parentElement.id;
    setActive(active == parentId ? "" : parentId);
  };

  return (
    <div
      className="bg-zinc-900 flex flex-col items-center lg:items-stretch min-h-screen lg:max-h-screen lg:overflow-y-hidden p-4 overflow-x-hidden roboto-mono-light"
      style={{
        scrollbarWidth: "none",
      }}
    >
      <Header />

      <div className="w-full flex flex-col items-center lg:flex-row lg:items-start">
        <HeroBox />
        <div className="flex flex-col items-center py-2 m-2 lg:py-0 lg:my-4 lg:m-0 w-full lg:w-2/3 shrink-0 lg:max-h-[80vh] lg:overflow-y-scroll">
          {categories.map((category, ind) => (
            <Category
              key={ind}
              id={String(ind)}
              onCancelClick={onCancelClick}
              onSectionClick={onSectionClick}
              active={active}
              name={category.name}
              childrenComponents={category.children}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
