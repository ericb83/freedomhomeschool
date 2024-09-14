"use client";
import React from "react";

const Login = () => {
  return (
    <div className="w-full max-w-xs">
      <form
        data-theme="cupcake"
        className="shadow-lg rounded-xl p-6 flex flex-col gap-6"
        action=""
      >
        <input
          className="bg-white shadow-lg rounded-xl p-4 input input-bordered input-primary"
          type="email"
          id="email"
          placeholder="Email"
        />

        <input
          className="bg-white shadow-lg rounded-xl p-4 input input-bordered input-primary"
          type="password"
          id="password"
          placeholder="Password"
        />

        <button
          data-theme="aqua"
          className="btn shadow-lg rounded-xl p-4 mt-4 hover:bg-transparent hover:text-black"
          type="submit"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
