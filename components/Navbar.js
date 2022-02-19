import React from "react";

const style = {
  wrapper: `w-full px-[1.2rem] py-[0.8rem] flex fixed bg-white`,
  logoText: `text-xl font-bold text-gray-800`,
};

const Navbar = () => {
  return (
    <div className={style.wrapper}>
      <h2 className={style.logoText}>Navbar</h2>
    </div>
  );
};

export default Navbar;
