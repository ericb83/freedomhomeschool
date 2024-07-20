import React from "react";
import SignUp from "../components/SignUp";
const signupPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center ">
      <h1 className="mb-6 font-extrabold">Create Account</h1>
      <SignUp />
    </div>
  );
};

export default signupPage;
