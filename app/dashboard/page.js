import Cards from "@/components/Cards";
import SideBar from "@/components/SideBar";
import React from "react";

const dashboard = () => {
  return (
    <div className="flex flex-row">
      <SideBar />
      <Cards />
    </div>
  );
};

export default dashboard;
