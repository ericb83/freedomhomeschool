"use client";
import React, { useState, useEffect } from "react";
import SignUp from "../../components/SignUp";
import Login from "../../components/Login";
import { useRouter, useSearchParams } from "next/navigation";

const AuthPage = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const form = searchParams.get("form") || "signup";
  const [formType, setFormType] = useState("signup");

  useEffect(() => {
    setFormType(form);
  }, [form]);

  const toggleForm = () => {
    const newForm = formType === "signup" ? "login" : "signup";
    router.push(`/auth?form=${newForm}`); // Update the URL query string
    setFormType(newForm);
  };
  console.log("Current form query parameter:", form);
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-12">
      <h1 className="mb-6 font-extrabold text-2xl">
        {formType === "signup" ? "Create Account" : "Login"}
      </h1>

      <div className="w-full max-w-xs">
        {formType === "signup" ? <SignUp /> : <Login />}
      </div>

      <button
        onClick={toggleForm}
        className="mt-6 text-white hover:text-blue-400"
      >
        {formType === "signup"
          ? "Already have an account? Login Here"
          : "Don't have an account? Create Account Here"}
      </button>
    </div>
  );
};

export default AuthPage;
