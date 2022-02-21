import React from "react";
import Link from "next/link";
import Dropdown from "./Dropdown";
import { motion } from "framer-motion";
import {
  RiInstagramFill,
  RiLinkedinBoxFill,
  RiGithubFill,
  RiHome2Fill,
  RiListCheck2,
} from "react-icons/ri";

const style = {
  wrapper: `w-full px-14 py-[0.8rem] flex justify-between fixed bg-white z-20`,
  logoText: `text-4xl font-black text-gray-800`,
  navbar: `flex space-x-4 text-lg font-medium items-center`,
};

const Navbar = () => {
  return (
    <div className={style.wrapper}>
      <h2 className={style.logoText}>zApp</h2>
      <div className={style.navbar}>
        <Link href="/">
          <motion.a
            whileHover={{
              color: "#86bbd8",
              x: 2,
              y: -1,
            }}
            className="cursor-pointer p-1 flex items-center"
          >
            <RiHome2Fill className="mr-1" /> Home
          </motion.a>
        </Link>
        <Link href="/">
          <motion.a
            whileHover={{
              color: "#86bbd8",
              x: 2,
              y: -1,
            }}
            className="cursor-pointer p-1 flex items-center"
          >
            <RiListCheck2 className="mr-1" /> Projects
          </motion.a>
        </Link>
        <Dropdown
          icon={<RiInstagramFill />}
          text1="emaaadelgado"
          text2="gabriel_briitez"
          link1="https://www.instagram.com/emaaadelgado/"
          link2="https://www.instagram.com/gabriel_briitez/"
        />
        <Dropdown
          icon={<RiGithubFill />}
          text1="emadel1990"
          text2="gbritez53"
          link1="https://github.com/emadel1990"
          link2="https://github.com/gbritez53"
        />
        <Dropdown
          icon={<RiLinkedinBoxFill />}
          text1="emadevjs"
          text2="gabriel-britez"
          link1="https://www.linkedin.com/in/emadevjs/"
          link2="https://www.linkedin.com/in/gabriel-britez/"
        />
      </div>
    </div>
  );
};

export default Navbar;
