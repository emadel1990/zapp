import React from "react";
import Navbar from "../Navbar";

const style = {
  appLayout: "min-h-screen pt-[3.6rem] relative px-14",
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
