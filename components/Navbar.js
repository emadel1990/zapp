import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Dropdown from "./Dropdown";

import { RiListCheck2, RiContactsFill, RiArticleLine } from "react-icons/ri";
import { FaHome } from "react-icons/fa";

const style = {
  wrapper: `w-full px-14 py-[0.8rem] flex justify-between fixed bg-white z-40`,
  logoText: `text-4xl font-black text-gray-800`,
  navbar: `flex space-x-4 text-lg items-center`,
  navItem: `flex items-center`,
  hoverAnimation: `hover:-translate-y-[1px] transition ease-in-out duration-[100ms]`,
  hoverButtonAnimation: `p-2 hover:-translate-y-[1px] transition duration-[100ms] ease-in-out focus:outline-none`,
};

const Navbar = () => {
  const [dropdown, setDropdown] = useState(false);

  const closeMobileMenu = () => setDropdown(false);
  const wrapperRef = useRef(null);

  function useOutsideClick(ref) {
    useEffect(() => {
      function handleClickOutside(e) {
        if (ref.current && !ref.current.contains(e.target)) {
          closeMobileMenu();
        }
      }

      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }
  useOutsideClick(wrapperRef);

  return (
    <div className={style.wrapper} ref={wrapperRef}>
      <h2 className={style.logoText}>zApp</h2>
      <ul className={style.navbar}>
        <li className={style.hoverAnimation}>
          <Link href="/">
            <a className={style.navItem}>
              <FaHome className="mr-1" /> Home
            </a>
          </Link>
        </li>
        <li className={style.hoverAnimation}>
          <Link href="/">
            <a className={style.navItem}>
              <RiListCheck2 className="mr-1" /> Projects
            </a>
          </Link>
        </li>
        <li className={style.hoverAnimation}>
          <Link href="/">
            <a className={style.navItem}>
              <RiArticleLine className="mr-1" /> Articles
            </a>
          </Link>
        </li>

        <button
          className={style.hoverButtonAnimation}
          onClick={() => setDropdown(!dropdown)}
        >
          <span className={style.navItem}>
            <RiContactsFill className="mr-1" /> About us
          </span>
        </button>
        {dropdown && <Dropdown dropdown={dropdown} setDropdown={setDropdown} />}
      </ul>
    </div>
  );
};

export default Navbar;
