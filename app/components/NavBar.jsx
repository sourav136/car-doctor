import Link from "next/link";
import React from "react";
import Image from "next/image";
import { BsHandbag } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";

const NavBar = () => {
  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
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
        <a className="btn btn-ghost text-xl">
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
      <div className="navbar-end">
        <BsHandbag className="h-6 w-6 text-gray-500" />
        <CiSearch className="h-6 w-6 text-gray-500 ml-5" />

        <a className="btn text-lg font-semibold text-primary-text ring-2 ring-primary bg-transparent hidden sm:inline-flex ml-7.5">
          Appointment
        </a>
      </div>
    </div>
  );
};

export default NavBar;
