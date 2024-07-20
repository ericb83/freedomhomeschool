import React from "react";

/* Signup Form Component*/
const SignUp = () => {
  return (
    <div className="w-full max-w-xs">
      <form
        data-theme="cupcake"
        className=" shadow-lg rounded-xl p-6 flex flex-col gap-6 "
        action=""
      >
        <input
          className=" bg-white shadow-lg rounded-xl px-4 py-4  input input-bordered input-primary"
          type="text"
          placeholder="Name"
        />

        <input
          className="bg-white shadow-lg rounded-xl px-4 py-4  input input-bordered input-primary"
          type="phone"
          placeholder="Phone Number"
        />

        <input
          className="bg-white shadow-lg rounded-xl px-4 py-4  input input-bordered input-primary"
          type="email"
          placeholder="Email"
        />

        <input
          className="bg-white shadow-lg rounded-xl px-4 py-4  input input-bordered input-primary"
          type="password"
          placeholder="Password"
        />

        <input
          className="bg-white shadow-lg rounded-xl px-4 py-4  input input-bordered input-primary"
          type="password"
          placeholder="Confirm Password"
        />

        <button
          data-theme="aqua"
          className="shadow-lg rounded-xl px-4 py-4 hover:bg-transparent hover:text-black"
          type="submit"
        >
          Sign Up
        </button>
        <span>
          Already a member?
          <button className="btn btn-link  hover:text-black">
            Sign In Here
          </button>
        </span>
      </form>
    </div>
  );
};

export default SignUp;
