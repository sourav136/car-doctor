import Link from "next/link";
import React from "react";

const AboutUs = ({ href, title }) => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-15 md:mt-25 lg:mt-32.5">
      <div className="flex flex-col justify-center">
        <div className="relative w-9/10">
          <img
            className="w-full object-cover object-center rounded-md"
            src="/assets/images/about_us/person.jpg"
            alt="about us"
          />
          <div className="border-10 border-white w-6/10 rounded-sm absolute -bottom-1/10 -right-1/10">
            <img
              className="object-center"
              src="/assets/images/about_us/parts.jpg"
              alt="abot us"
            />
          </div>
        </div>
      </div>
      <div className="mt-10 lg:mt-0">
        <h2 className="font-bold text-primary sm:text-xl text-lg">About Us</h2>
        <h3 className="font-bold text-main-dark text-4xl lg:text-[44px] mt-5 mb-7.5 max-w-94">
          We are qualified & of experience in this field
        </h3>
        <p className="text-gray text-sm md:text-[16px]">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly
          believable.{" "}
        </p>
        <p className="text-gray text-sm md:text-[16px] mt-5">
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly
          believable.{" "}
        </p>
        <div className="mt-7.5">
          <Link
            href={href}
            className=" cursor-pointer  bg-primary text-white text-[14px] sm:text-lg font-semibold px-5.5 py-5 rounded-sm"
          >
            {title}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
