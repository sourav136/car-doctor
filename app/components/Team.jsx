import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const Team = () => {
    return (
        <section className='mt-15 md:mt-25 lg:mt-32.5 flex flex-col items-center'>
            <h2 className='font-bold text-primary sm:text-xl text-lg'>Team</h2>
            <h3 className='font-bold text-main-dark text-4xl lg:text-[44px] my-5'>Meet Our Team</h3>
            <p className='text-gray max-w-180 text-sm md:text-[16px] text-center mb-12.5 capitalize'>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                <div className='p-6 border border-form rounded-lg flex flex-col items-center'>
                    <img className='w-full object-cover rounded-lg' src="/assets/images/team/1.jpg" alt="Team Member 1" />
                    <h4 className='text-2xl text-light-dark font-bold mt-5 mb-2.5'>Adam</h4>
                    <p className='text-xl text-form font-semibold'>Engine Expert</p>
                    <div className='flex justify-around gap-3 w-48 mt-4'>
                        <div className='h-10 w-10 rounded-full flex items-center justify-center text-white text-lg bg-[#395185] cursor-pointer'>
                            <FaFacebookF/>
                        </div>
                        <div className='h-10 w-10 rounded-full flex items-center justify-center text-white text-lg bg-[#55ACEE] cursor-pointer'>
                            <FaTwitter/>
                        </div>
                        <div className='h-10 w-10 rounded-full flex items-center justify-center text-white text-lg bg-[#0A66C2] cursor-pointer'>
                            <FaLinkedinIn/>
                        </div>
                        <div className='h-10 w-10 rounded-full flex items-center justify-center text-white text-lg bg-[#EF545E] cursor-pointer'>
                            <FaInstagram/>
                        </div>
                    </div>
                </div>
                <div className='p-6 border border-form rounded-lg flex flex-col items-center'>
                    <img className='w-full object-cover rounded-lg' src="/assets/images/team/2.jpg" alt="Team Member 1" />
                    <h4 className='text-2xl text-light-dark font-bold mt-5 mb-2.5'>Smith</h4>
                    <p className='text-xl text-form font-semibold'>Engine Expert</p>
                    <div className='flex justify-around gap-3 w-48 mt-4'>
                        <div className='h-10 w-10 rounded-full flex items-center justify-center text-white text-lg bg-[#395185] cursor-pointer'>
                            <FaFacebookF/>
                        </div>
                        <div className='h-10 w-10 rounded-full flex items-center justify-center text-white text-lg bg-[#55ACEE] cursor-pointer'>
                            <FaTwitter/>
                        </div>
                        <div className='h-10 w-10 rounded-full flex items-center justify-center text-white text-lg bg-[#0A66C2] cursor-pointer'>
                            <FaLinkedinIn/>
                        </div>
                        <div className='h-10 w-10 rounded-full flex items-center justify-center text-white text-lg bg-[#EF545E] cursor-pointer'>
                            <FaInstagram/>
                        </div>
                    </div>
                </div>
                <div className='p-6 border border-form rounded-lg flex flex-col items-center'>
                    <img className='w-full object-cover rounded-lg' src="/assets/images/team/3.jpg" alt="Team Member 1" />
                    <h4 className='text-2xl text-light-dark font-bold mt-5 mb-2.5'>Joe</h4>
                    <p className='text-xl text-form font-semibold'>Engine Expert</p>
                    <div className='flex justify-around gap-3 w-48 mt-4'>
                        <div className='h-10 w-10 rounded-full flex items-center justify-center text-white text-lg bg-[#395185] cursor-pointer'>
                            <FaFacebookF/>
                        </div>
                        <div className='h-10 w-10 rounded-full flex items-center justify-center text-white text-lg bg-[#55ACEE] cursor-pointer'>
                            <FaTwitter/>
                        </div>
                        <div className='h-10 w-10 rounded-full flex items-center justify-center text-white text-lg bg-[#0A66C2] cursor-pointer'>
                            <FaLinkedinIn/>
                        </div>
                        <div className='h-10 w-10 rounded-full flex items-center justify-center text-white text-lg bg-[#EF545E] cursor-pointer'>
                            <FaInstagram/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Team;