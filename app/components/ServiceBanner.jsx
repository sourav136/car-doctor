import Image from 'next/image';
import React from 'react';

const ServiceBanner = ({title, routeTitle}) => {
    return (
        <section className='relative w-full h-75 bg-cover bg-center flex justify-center md:justify-start items-center rounded-lg md:px-25'>
            <Image fill src='/assets/images/banner/4.jpg' alt='Service Banner' className='rounded-lg object-cover'/>
            <div className='absolute inset-0 bg-linear-to-r from-main-dark to-transparent rounded-lg'></div>
            <h1 className='text-4xl md:text-5xl text-white font-bold z-10'>{title}</h1>
            <div className='bg-primary absolute bottom-0 left-1/2 transform -translate-x-1/2 flex justify-center items-center z-10'
            style={{
                width: "300px", 
                height: "50px", 
                clipPath: "polygon(18% -10%, 82% -10%, 100% 100%, 0% 100%)",
            }}>
                <h2 className='text-white font-medium text-xl'>{routeTitle}</h2>
            </div>
        </section>
    );
};

export default ServiceBanner;