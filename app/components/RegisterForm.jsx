"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const RegisterForm = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const user = {
      email: e.target.email.value,
      password: e.target.password.value,
      name: e.target.name.value
    };

    const res = await fetch("/api/register", {
        method: "POST",
        body: JSON.stringify(user)
    })

    if (res.ok) {
      e.target.reset();
      router.push("/login");
    } else {
      alert("Registration failed");
    }
    setLoading(false);
  };
  return (
    <form className="flex flex-col gap-7" onSubmit={handleSubmit}>
      <label htmlFor="name" className="text-light-dark font-semibold">
        Name
      </label>
      <input
        className="w-full rounded-lg px-6 py-4 text-form border border-form"
        type="text"
        name="name"
        id="name"
        placeholder="Your name"
      />
      <label htmlFor="email" className="text-light-dark font-semibold">
        Email
      </label>
      <input
        className="w-full rounded-lg px-6 py-4 text-form border border-form"
        type="email"
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
        name="password"
        id="password"
        placeholder="Your Password"
      />
      <button
        className="rounded-lg bg-primary py-4 text-white text-xl hover:border-2 hover:border-primary hover:bg-transparent hover:text-primary transition cursor-pointer"
        type="submit"
      >
        {loading ? (
          <span className="loading loading-dots loading-xl"></span>
        ) : (
          "Sign Up"
        )}
      </button>
    </form>
  );
};

export default RegisterForm;
