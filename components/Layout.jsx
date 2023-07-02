import React from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import HeaderItems from "./HeaderItems";

const Layout = ({ children }) => {
  return (
    <>
    <Header/>
    <HeaderItems/>
    <div className="h-screen flex flex-row justify-start">
     
      <Sidebar />
      <div className="bg-white flex-1 p-4 text-white">
          {children}
      </div>
    </div>
    </>
    
  );
};

export default Layout;
