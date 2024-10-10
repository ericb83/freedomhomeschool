import React from "react";
import { users, hours, students, classes } from "@/data/data";

const Cards = () => {
  return (
    <div className="bg-data-theme min-h-screen flex flex-col w-full items-center gap-6 p-4">
      <h2 className="font-bold text-xl mb-4">Welcome {users.name}!</h2>
      <div className="flex flex-row gap-14">
        <div className=" h-60 w-60 bg-primary rounded-2xl p-6  ">
          <p className=" font-bold text-xl text-center p-4 mt-8 ">
            {hours.hours}
          </p>
          <h2 className="text-xl font-bold text-center">Total Hours</h2>
        </div>
        <div className="h-60 w-60 bg-secondary rounded-2xl p-6  ">
          <p className="font-bold text-xl text-center p-4 mt-8">{hours.GPA}</p>
          <p className="text-xl font-bold text-center">GPA</p>
        </div>
        <div className="h-60 w-60 bg-neutral rounded-2xl p-6  ">card</div>
      </div>
    </div>
  );
};

export default Cards;
