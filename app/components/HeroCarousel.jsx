import Image from "next/image";
import React from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";

const HeroCarousel = () => {
  return (
    <section className="carousel w-full rounded-lg">
      <div id="slide1" className="carousel-item relative w-full h-150">
        <div className="absolute inset-0 bg-linear-to-r from-black/80 to-transparent z-100"></div>
        <Image
          alt="Banner image"
          fill
          src="/assets/images/banner/5.jpg"
          className="min-h-[480px] max-h-[600px] object-cover rounded-lg"
        />
        <div className="absolute inset-8 sm:inset-12 md:inset-15 lg:inset-25 z-200 flex flex-col justify-center">
          <h1 className="text-white max-w-[463px] font-bold text-5xl sm:text-6xl">
            Affordable Price For Car Servicing
          </h1>
          <p className="text-white text-[16px] sm:text-lg max-w-[522px] my-7.5">
            There are many variations of passages of available, but the majority
            have suffered alteration in some form
          </p>
          <div className="flex gap-4 sm:gap-5">
            <button className=" cursor-pointer  bg-primary text-white text-[14px] sm:text-lg font-semibold px-5.5 py-5 rounded-sm">
              Discover More
            </button>
            <button className=" cursor-pointer  bg-transparent ring-2 ring-white text-white text-[14px] sm:text-lg font-semibold p-5.5 py-5 rounded-sm">
              Latest Project
            </button>
          </div>
          <div className="flex gap-4 justify-between mt-5 sm:justify-end">
            <div className="h-10 w-10 sm:h-15 sm:w-15 rounded-full flex items-center justify-center relative bg-transparent hover:bg-primary hover:opacity-100 z-1 easy-in-out duration-300 cursor-pointer">
              <div className="opacity-20 z-0 bg-white inset-0 absolute rounded-full "></div>
              <a href="#slide6" className="z-2 text-white">
                <FaArrowLeft className="h-5 w-5 sm:h-6 sm:w-6" />
              </a>
            </div>
            <div className="h-10 w-10 sm:h-15 sm:w-15 rounded-full flex items-center justify-center relative bg-transparent hover:bg-primary hover:opacity-100 z-1 easy-in-out duration-300 cursor-pointer">
              <div className="opacity-20 z-0 bg-white inset-0 absolute rounded-full"></div>
              <a href="#slide2" className="z-2 text-white">
                <FaArrowRight className="h-5 w-5 sm:h-6 sm:w-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full h-150 ">
        <div className="absolute inset-0 bg-linear-to-r from-black/80 to-transparent z-100"></div>
        <Image
          alt="Banner image"
          fill
          src="/assets/images/banner/1.jpg"
          className="min-h-[480px] max-h-[600px] object-cover rounded-lg"
        />
        <div className="absolute inset-8 sm:inset-12 md:inset-15 lg:inset-25 z-200 flex flex-col justify-center">
          <h1 className="text-white max-w-[463px] font-bold text-5xl sm:text-6xl">
            Affordable Price For Car Servicing
          </h1>
          <p className="text-white text-[16px] sm:text-lg max-w-[522px] my-7.5">
            There are many variations of passages of available, but the majority
            have suffered alteration in some form
          </p>
          <div className="flex gap-4 sm:gap-5">
            <button className=" cursor-pointer  bg-primary text-white text-[14px] sm:text-lg font-semibold px-5.5 py-5 rounded-sm">
              Discover More
            </button>
            <button className=" cursor-pointer  bg-transparent ring-2 ring-white text-white text-[14px] sm:text-lg font-semibold p-5.5 py-5 rounded-sm">
              Latest Project
            </button>
          </div>
          <div className="flex gap-4 justify-between mt-5 sm:justify-end">
            <div className="h-10 w-10 sm:h-15 sm:w-15 rounded-full flex items-center justify-center relative bg-transparent hover:bg-primary hover:opacity-100 z-1 easy-in-out duration-300 cursor-pointer">
              <div className="opacity-20 z-0 bg-white inset-0 absolute rounded-full "></div>
              <a href="#slide1" className="z-2 text-white">
                <FaArrowLeft className="h-5 w-5 sm:h-6 sm:w-6" />
              </a>
            </div>
            <div className="h-10 w-10 sm:h-15 sm:w-15 rounded-full flex items-center justify-center relative bg-transparent hover:bg-primary hover:opacity-100 z-1 easy-in-out duration-300 cursor-pointer">
              <div className="opacity-20 z-0 bg-white inset-0 absolute rounded-full"></div>
              <a href="#slide3" className="z-2 text-white">
                <FaArrowRight className="h-5 w-5 sm:h-6 sm:w-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full h-150 ">
        <div className="absolute inset-0 bg-linear-to-r from-black/80 to-transparent z-100"></div>
        <Image
          alt="Banner image"
          fill
          src="/assets/images/banner/2.jpg"
          className="min-h-[480px] max-h-[600px] object-cover rounded-lg"
        />
        <div className="absolute inset-8 sm:inset-12 md:inset-15 lg:inset-25 z-200 flex flex-col justify-center">
          <h1 className="text-white max-w-[463px] font-bold text-5xl sm:text-6xl">
            Affordable Price For Car Servicing
          </h1>
          <p className="text-white text-[16px] sm:text-lg max-w-[522px] my-7.5">
            There are many variations of passages of available, but the majority
            have suffered alteration in some form
          </p>
          <div className="flex gap-4 sm:gap-5">
            <button className=" cursor-pointer  bg-primary text-white text-[14px] sm:text-lg font-semibold px-5.5 py-5 rounded-sm">
              Discover More
            </button>
            <button className=" cursor-pointer  bg-transparent ring-2 ring-white text-white text-[14px] sm:text-lg font-semibold p-5.5 py-5 rounded-sm">
              Latest Project
            </button>
          </div>
          <div className="flex gap-4 justify-between mt-5 sm:justify-end">
            <div className="h-10 w-10 sm:h-15 sm:w-15 rounded-full flex items-center justify-center relative bg-transparent hover:bg-primary hover:opacity-100 z-1 easy-in-out duration-300 cursor-pointer">
              <div className="opacity-20 z-0 bg-white inset-0 absolute rounded-full "></div>
              <a href="#slide2" className="z-2 text-white">
                <FaArrowLeft className="h-5 w-5 sm:h-6 sm:w-6" />
              </a>
            </div>
            <div className="h-10 w-10 sm:h-15 sm:w-15 rounded-full flex items-center justify-center relative bg-transparent hover:bg-primary hover:opacity-100 z-1 easy-in-out duration-300 cursor-pointer">
              <div className="opacity-20 z-0 bg-white inset-0 absolute rounded-full"></div>
              <a href="#slide4" className="z-2 text-white">
                <FaArrowRight className="h-5 w-5 sm:h-6 sm:w-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full h-150 ">
        <div className="absolute inset-0 bg-linear-to-r from-black/80 to-transparent z-100"></div>
        <Image
          alt="Banner image"
          fill
          src="/assets/images/banner/3.jpg"
          className="min-h-[480px] max-h-[600px] object-cover rounded-lg"
        />
        <div className="absolute inset-8 sm:inset-12 md:inset-15 lg:inset-25 z-200 flex flex-col justify-center">
          <h1 className="text-white max-w-[463px] font-bold text-5xl sm:text-6xl">
            Affordable Price For Car Servicing
          </h1>
          <p className="text-white text-[16px] sm:text-lg max-w-[522px] my-7.5">
            There are many variations of passages of available, but the majority
            have suffered alteration in some form
          </p>
          <div className="flex gap-4 sm:gap-5">
            <button className=" cursor-pointer  bg-primary text-white text-[14px] sm:text-lg font-semibold px-5.5 py-5 rounded-sm">
              Discover More
            </button>
            <button className=" cursor-pointer  bg-transparent ring-2 ring-white text-white text-[14px] sm:text-lg font-semibold p-5.5 py-5 rounded-sm">
              Latest Project
            </button>
          </div>
          <div className="flex gap-4 justify-between mt-5 sm:justify-end">
            <div className="h-10 w-10 sm:h-15 sm:w-15 rounded-full flex items-center justify-center relative bg-transparent hover:bg-primary hover:opacity-100 z-1 easy-in-out duration-300 cursor-pointer">
              <div className="opacity-20 z-0 bg-white inset-0 absolute rounded-full "></div>
              <a href="#slide3" className="z-2 text-white">
                <FaArrowLeft className="h-5 w-5 sm:h-6 sm:w-6" />
              </a>
            </div>
            <div className="h-10 w-10 sm:h-15 sm:w-15 rounded-full flex items-center justify-center relative bg-transparent hover:bg-primary hover:opacity-100 z-1 easy-in-out duration-300 cursor-pointer">
              <div className="opacity-20 z-0 bg-white inset-0 absolute rounded-full"></div>
              <a href="#slide5" className="z-2 text-white">
                <FaArrowRight className="h-5 w-5 sm:h-6 sm:w-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div id="slide5" className="carousel-item relative w-full h-150 ">
        <div className="absolute inset-0 bg-linear-to-r from-black/80 to-transparent z-100"></div>
        <Image
          alt="Banner image"
          fill
          src="/assets/images/banner/4.jpg"
          className="min-h-[480px] max-h-[600px] object-cover rounded-lg"
        />
        <div className="absolute inset-8 sm:inset-12 md:inset-15 lg:inset-25 z-200 flex flex-col justify-center">
          <h1 className="text-white max-w-[463px] font-bold text-5xl sm:text-6xl">
            Affordable Price For Car Servicing
          </h1>
          <p className="text-white text-[16px] sm:text-lg max-w-[522px] my-7.5">
            There are many variations of passages of available, but the majority
            have suffered alteration in some form
          </p>
          <div className="flex gap-4 sm:gap-5">
            <button className=" cursor-pointer  bg-primary text-white text-[14px] sm:text-lg font-semibold px-5.5 py-5 rounded-sm">
              Discover More
            </button>
            <button className=" cursor-pointer  bg-transparent ring-2 ring-white text-white text-[14px] sm:text-lg font-semibold p-5.5 py-5 rounded-sm">
              Latest Project
            </button>
          </div>
          <div className="flex gap-4 justify-between mt-5 sm:justify-end">
            <div className="h-10 w-10 sm:h-15 sm:w-15 rounded-full flex items-center justify-center relative bg-transparent hover:bg-primary hover:opacity-100 z-1 easy-in-out duration-300 cursor-pointer">
              <div className="opacity-20 z-0 bg-white inset-0 absolute rounded-full "></div>
              <a href="#slide4" className="z-2 text-white">
                <FaArrowLeft className="h-5 w-5 sm:h-6 sm:w-6" />
              </a>
            </div>
            <div className="h-10 w-10 sm:h-15 sm:w-15 rounded-full flex items-center justify-center relative bg-transparent hover:bg-primary hover:opacity-100 z-1 easy-in-out duration-300 cursor-pointer">
              <div className="opacity-20 z-0 bg-white inset-0 absolute rounded-full"></div>
              <a href="#slide6" className="z-2 text-white">
                <FaArrowRight className="h-5 w-5 sm:h-6 sm:w-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div id="slide6" className="carousel-item relative w-full h-150 ">
        <div className="absolute inset-0 bg-linear-to-r from-black/80 to-transparent z-100"></div>
        <Image
          alt="Banner image"
          fill
          src="/assets/images/banner/6.jpg"
          className="min-h-[480px] max-h-[600px] object-cover rounded-lg"
        />
        <div className="absolute inset-8 sm:inset-12 md:inset-15 lg:inset-25 z-200 flex flex-col justify-center">
          <h1 className="text-white max-w-[463px] font-bold text-5xl sm:text-6xl">
            Affordable Price For Car Servicing
          </h1>
          <p className="text-white text-[16px] sm:text-lg max-w-[522px] my-7.5">
            There are many variations of passages of available, but the majority
            have suffered alteration in some form
          </p>
          <div className="flex gap-4 sm:gap-5">
            <button className=" cursor-pointer  bg-primary text-white text-[14px] sm:text-lg font-semibold px-5.5 py-5 rounded-sm">
              Discover More
            </button>
            <button className=" cursor-pointer  bg-transparent ring-2 ring-white text-white text-[14px] sm:text-lg font-semibold p-5.5 py-5 rounded-sm">
              Latest Project
            </button>
          </div>
          <div className="flex gap-4 justify-between mt-5 sm:justify-end">
            <div className="h-10 w-10 sm:h-15 sm:w-15 rounded-full flex items-center justify-center relative bg-transparent hover:bg-primary hover:opacity-100 z-1 easy-in-out duration-300 cursor-pointer">
              <div className="opacity-20 z-0 bg-white inset-0 absolute rounded-full "></div>
              <a href="#slide5" className="z-2 text-white">
                <FaArrowLeft className="h-5 w-5 sm:h-6 sm:w-6" />
              </a>
            </div>
            <div className="h-10 w-10 sm:h-15 sm:w-15 rounded-full flex items-center justify-center relative bg-transparent hover:bg-primary hover:opacity-100 z-1 easy-in-out duration-300 cursor-pointer">
              <div className="opacity-20 z-0 bg-white inset-0 absolute rounded-full"></div>
              <a href="#slide1" className="z-2 text-white">
                <FaArrowRight className="h-5 w-5 sm:h-6 sm:w-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroCarousel;
