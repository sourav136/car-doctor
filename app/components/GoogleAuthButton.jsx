"use client";
import { signIn } from "next-auth/react";
import React from "react";
import { FcGoogle } from "react-icons/fc";

const GoogleAuthButton = () => {
  return (
    <button
      className="text-lg p-4.5 bg-bg rounded-full cursor-pointer"
      onClick={()=> signIn("google")}>
      <FcGoogle />
    </button>
  );
};

export default GoogleAuthButton;
