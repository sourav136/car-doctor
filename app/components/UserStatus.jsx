"use client";

import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { IoPersonSharp } from "react-icons/io5";
import React from "react";

const UserStatus = () => {
    const { data: session, status } = useSession();
    if (status === "loading") {
        return <div className="loading loading-spinner"></div>;
    }
  return (
    <>
      {session ? (
        <div className="drawer drawer-end">
          <input id="my-drawer-5" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content flex justify-end">
            {/* Page content here */}
            <label
              htmlFor="my-drawer-5"
              className="drawer-button cursor-pointer text-light-dark font-medium text-sm md:text-lg"
            >
              {session.user.name} <IoPersonSharp className="inline" />
            </label>
          </div>
          <div className="drawer-side">
            <label
              htmlFor="my-drawer-5"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <div className="menu bg-base-200 min-h-full w-80 p-4">
              <h4 className="text-2xl text-light-dark font-semibold text-center mt-5">
                Welcome,{" "}
                <span className="text-primary">{session.user.name}!</span>
              </h4>
              <p className="text-light-dark font-medium text-center my-4">
                {session.user.email}
              </p>
              <button
                onClick={() => signOut()}
                className="btn btn-outline border-primary text-primary"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      ) : (
        <Link href="/login" className="text-gray font-medium text-lg">
          Login
        </Link>
      )}
    </>
  );
};

export default UserStatus;
