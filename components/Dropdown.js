import { useState } from "react";
import { motion } from "framer-motion";

const Dropdown = ({ icon, text1, text2, link1, link2 }) => {
  const [shown, setShown] = useState(false);

  const showMenu = {
    enter: {
      opacity: 1,
      y: 0,
      display: "block",
    },
    exit: {
      y: -5,
      opacity: 0,
      transition: {
        duration: 0.3,
      },
      transitionEnd: {
        display: "none",
      },
    },
  };

  return (
    <motion.div
      onHoverStart={() => setShown(true)}
      onHoverEnd={() => setShown(false)}
      className="relative"
    >
      <span className="cursor-pointer">{icon}</span>
      <motion.ul
        variants={showMenu}
        initial="exit"
        animate={shown ? "enter" : "exit"}
        className="absolute bg-white mt-1 right-0 border border-blue-strong border-opacity-50 rounded-md p-2"
      >
        <a href={`${link1}`} rel="no-referrer" target="_blank">
          <motion.li
            whileHover={{
              color: "#86bbd8",
              x: 2,
            }}
            className="cursor-pointer p-1 text-gray-700"
          >
            {text1}
          </motion.li>
        </a>

        <a href={`${link2}`}>
          <motion.li
            whileHover={{
              color: "#86bbd8",
              x: 2,
            }}
            className="cursor-pointer p-1 text-gray-700"
          >
            {text2}
          </motion.li>
        </a>
      </motion.ul>
    </motion.div>
  );
};

export default Dropdown;
