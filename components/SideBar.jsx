import React from "react";
import Link from "next/link";
import { users } from "@/src/data";
const SideBar = () => {
  return (
    <div className=" flex min-h-screen bg-data-theme">
      {/* Sidebar*/}
      <div className="drawer lg:drawer-open items-start">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* Page content here */}
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu bg-base-200 text-base-content min-h-full w-60 p-4">
            {/* Sidebar content here */}
            <li>
              <a>Students</a>
            </li>
            <li>
              <a>Classes</a>
            </li>
            <li>
              <a>Schedule</a>
            </li>
            <li>
              <a>Reports</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
