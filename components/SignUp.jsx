"use client";
import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/lib/firebase/firebase.config";

/* Signup Form Component*/
const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccessMessage("");

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log("User signed up:", userCredential.user);
      setSuccessMessage("Account created successfully!");
      // Optionally, clear form fields after successful signup
      setName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
    } catch (err) {
      setError(err.message);
      console.error("Signup error:", err);
    }
  };
  return (
    <div className="w-full max-w-xs ">
      <form
        data-theme="cupcake"
        className=" shadow-lg rounded-xl p-6 flex flex-col gap-6 "
        onSubmit={handleSignup}
      >
        {error && <p className="text-red-500">{error}</p>}
        {successMessage && <p className="text-green-500">{successMessage}</p>}

        <input
          className=" bg-white shadow-lg rounded-xl px-4 py-4  input input-bordered input-primary"
          type="text"
          id="name"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          className="bg-white shadow-lg rounded-xl px-4 py-4  input input-bordered input-primary"
          type="email"
          id="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          className="bg-white shadow-lg rounded-xl px-4 py-4  input input-bordered input-primary"
          type="password"
          id="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <input
          className="bg-white shadow-lg rounded-xl px-4 py-4  input input-bordered input-primary"
          type="password"
          id="confirmPassword"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />

        <button
          data-theme="aqua"
          className="btn shadow-lg rounded-xl px-4 py-4 mt-4 hover:bg-transparent hover:text-black"
          type="submit"
        >
          Create Account
        </button>
      </form>
    </div>
  );
};

export default SignUp;
