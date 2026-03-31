import Image from 'next/image';
import React from 'react';

const Steps = () => {
    return (
        <div>
            <h2 className='text-main-dark font-bold text-4xl mt-12.5 mb-7.5'>3 Simple Steps To Process</h2>
            <p className='text-gray'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text</p>
            <div className='grid grid-cols-6 gap-6 mt-7.5'>
                <div className='col-span-6 md:col-span-3 lg:col-span-2 flex flex-col items-center justify-center p-10 rounded-lg border-2 border-bg'>
                    <div className='bg-primary rounded-full h-14 w-14 flex items-center justify-center relative'>
                        <p className='text-white font-bold text-xl'>01</p>
                        <div className='absolute -inset-3 bg-primary opacity-10 rounded-full'></div>
                    </div>
                    <h4 className='text-center text-xl font-bold text-main-dark my-5'>Step One</h4>
                    <p className='text-light-dark text-center'>It uses a dictionary of over 200 .</p>
                </div>
                <div className='col-span-6 md:col-span-3 lg:col-span-2 flex flex-col items-center justify-center p-10 rounded-lg border-2 border-bg'>
                    <div className='bg-primary rounded-full h-14 w-14 flex items-center justify-center relative'>
                        <p className='text-white font-bold text-xl'>02</p>
                        <div className='absolute -inset-3 bg-primary opacity-10 rounded-full'></div>
                    </div>
                    <h4 className='text-center text-xl font-bold text-main-dark my-5'>Step Two</h4>
                    <p className='text-light-dark text-center'>It uses a dictionary of over 200 .</p>
                </div>
                <div className='col-span-6 md:col-span-3 lg:col-span-2 flex flex-col items-center justify-center p-10 rounded-lg border-2 border-bg'>
                    <div className='bg-primary rounded-full h-14 w-14 flex items-center justify-center relative'>
                        <p className='text-white font-bold text-xl'>03</p>
                        <div className='absolute -inset-3 bg-primary opacity-10 rounded-full'></div>
                    </div>
                    <h4 className='text-center text-xl font-bold text-main-dark my-5'>Step Three</h4>
                    <p className='text-light-dark text-center'>It uses a dictionary of over 200 .</p>
                </div>
            </div>
            <div className='relative mt-7.5'>
                <img className='w-full rounded-lg' src="/assets/images/homeCarousel/2.jpg" alt="" />
                <Image height={126} width={126} className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2' src="/assets/icons/Frame.svg" alt="" />
            </div>
        </div>
    );
};

export default Steps;