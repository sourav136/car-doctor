"use client";
import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import React from "react";
import { FcGoogle } from "react-icons/fc";

const GoogleAuthButton = () => {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/";
  return (
    <button
      className="text-lg p-4.5 bg-bg rounded-full cursor-pointer"
      onClick={() => signIn("google", { callbackUrl: callbackUrl })}
    >
      <FcGoogle />
    </button>
  );
};

export default GoogleAuthButton;
