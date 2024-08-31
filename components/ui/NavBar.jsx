import React from "react";
import Link from "next/link";

const NavBar = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <Link href="/" className="btn btn-ghost text-xl">
          Freedom Homeschool
        </Link>
      </div>
      <div className="flex-none">
        <input
          type="checkbox"
          value="cyberpunk"
          className="toggle theme-controller"
        />
      </div>
    </div>
  );
};

export default NavBar;
