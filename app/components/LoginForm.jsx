"use client";
import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import React, { useState } from "react";

const LoginForm = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/";
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const email = e.target.email.value;
    const password = e.target.password.value;

    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
      callbackUrl,
    });
    if(res?.error) {
      setError(res.error);
      setLoading(false);
      return;
    }

    if (res.ok) {
      e.target.reset();
    }
    setLoading(false);
  };
  return (
    <form className="flex flex-col gap-7" onSubmit={handleSubmit}>
      <label htmlFor="email" className="text-light-dark font-semibold">
        Email
      </label>
      <input
        className="w-full rounded-lg px-6 py-4 text-form border border-form"
        type="email"
        required
        name="email"
        id="email"
        placeholder="Your email"
      />
      <label htmlFor="password" className="text-light-dark font-semibold">
        Password
      </label>
      <input
        className="w-full rounded-lg px-6 py-4 text-form border border-form"
        type="password"
        required
        name="password"
        id="password"
        placeholder="Your Password"
      />
      {error && <p className="text-red-500">{error}</p>}
      <button
        className="rounded-lg bg-primary py-4 text-white text-xl hover:border-2 hover:border-primary hover:bg-transparent hover:text-primary transition cursor-pointer"
        type="submit"
      >
        {loading ? (
          <span className="loading loading-dots loading-xl"></span>
        ) : (
          "Sign In"
        )}
      </button>
    </form>
  );
};

export default LoginForm;
