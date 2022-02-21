import { useEffect, useState } from "react";
import {
  RiInstagramFill,
  RiLinkedinBoxFill,
  RiGithubFill,
} from "react-icons/ri";

const style = {
  listContainer: `absolute transition-none top-6 right-[-430px] bg-white rounded-md shadow border border-slate-200 text-gray-800 w-48 flex flex-col justify-start`,
  listItem: `hover:bg-blue-100 hover:text-blue-700 hover:font-medium px-4 py-2 z-10`,
};

const Dropdown = ({ setDropdown }) => {
  const [open, isOpen] = useState(false);
  const handleClick = () => {
    isOpen(!open);
  };

  useEffect(() => {
    setDropdown(!open);
  }, [open, setDropdown]);

  const MenuItems = [
    {
      title: "emaaadelgado",
      link: "https://www.instagram.com/emaaadelgado/",
      icon: RiInstagramFill,
    },
    {
      title: "gabriel_britez",
      link: "https://www.instagram.com/gabriel_briitez/",
      icon: RiInstagramFill,
    },
    {
      title: "emadel1990",
      link: "https://github.com/emadel1990",
      icon: RiGithubFill,
    },
    {
      title: "gbritez53",
      link: "https://github.com/gbritez53/",
      icon: RiGithubFill,
    },
    {
      title: "emadevjs",
      link: "https://www.linkedin.com/in/emadevjs/",
      icon: RiLinkedinBoxFill,
    },
    {
      title: "gabriel-britez",
      link: "https://www.linkedin.com/in/gabriel-britez/",
      icon: RiLinkedinBoxFill,
    },
  ];

  return (
    <div className="absolute">
      <div className={style.listContainer}>
        {MenuItems.map((item, i) => (
          <a
            key={i}
            rel="noreferrer"
            target="_blank"
            href={item.link}
            onClick={handleClick}
            className={style.listItem}
          >
            <span className="flex items-center">
              <item.icon className="mr-2" />
              {item.title}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Dropdown;
