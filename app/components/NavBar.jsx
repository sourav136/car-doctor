import Link from "next/link";
import React from "react";
import Image from "next/image";
import { auth } from "@/auth";
import UserStatus from "./UserStatus";

const NavBar = async () => {
  const session = await auth();
  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Cart", href: "/cart" },
  ];
  return (
    <div className="navbar bg-base-100 py-10 w-full">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {navItems.map((item, index) => (
              <li key={index}>
                <Link
                  className="font-semibold text-lg text-light-dark "
                  href={item.href}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <a href="#">
          <Image src="/assets/logo.svg" alt="logo" height={86} width={100} />
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navItems.map((item, index) => (
            <li key={index}>
              <Link
                className="font-semibold text-lg text-light-dark "
                href={item.href}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="navbar-end ">
        <UserStatus/>
        <Link
          href="/cart"
          className="btn text-lg font-semibold text-primary-text ring-2 ring-primary bg-transparent hidden sm:inline-flex ml-7.5"
        >
          Appointment
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
