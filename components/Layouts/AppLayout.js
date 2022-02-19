import React from "react";
import Navbar from "../Navbar";

const AppLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">{children}</main>
    </>
  );
};

export default AppLayout;
