import React from "react";
import Navbar from "../Navbar";

const style = {
  appLayout: "min-h-screen bg-red-400 pt-[3.6rem] px-4 md:px-14",
};
const AppLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className={style.appLayout}>{children}</main>
    </>
  );
};

export default AppLayout;
