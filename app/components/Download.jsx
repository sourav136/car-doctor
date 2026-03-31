import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import { TbFileDownloadFilled } from "react-icons/tb";

const Download = () => {
  return (
    <div className="bg-main-dark rounded-lg p-10 md:p-5 lg:p-10 order-3 md:order-2">
      <h4 className="text-white text-2xl font-bold mb-5">Download</h4>
      <div className="flex justify-between cursor-pointer items-center">
        <div className="flex gap-2.5 items-center">
          <TbFileDownloadFilled height={30} width={30} className="text-white h-7.5 w-7.5" />
          <div>
            <h5 className="text-white text-lg font-semibold">Our Brochure</h5>
            <p className="mt-1 text-bg">Download</p>
          </div>
        </div>
        <div className="h-14 w-14 rounded-md bg-primary flex items-center justify-center text-white hover:bg-white hover:text-primary duration-300 transition cursor-pointer">
          <FaArrowRight height={24} width={24} className="h-6 w-6" />
        </div>
      </div>
      <div className="flex justify-between cursor-pointer mt-5 items-center">
        <div className="flex gap-2.5 items-center">
          <TbFileDownloadFilled height={30} width={30} className="text-white h-7.5 w-7.5" />
          <div>
            <h5 className="text-white text-lg font-semibold">Company Details</h5>
            <p className="mt-1 text-bg">Download</p>
          </div>
        </div>
        <div className="h-14 w-14 rounded-md bg-primary flex items-center justify-center text-white hover:bg-white hover:text-primary duration-300 transition cursor-pointer">
          <FaArrowRight height={24} width={24} className="h-6 w-6" />
        </div>
      </div>
    </div>
  );
};

export default Download;
