import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaArrowRight } from "react-icons/fa";

async function getServices(){
    const response = await fetch("http://localhost:3000/api/services", {
        cache:"force-cache",
    })
    return response.json();
}

const Services = async () => {

    const services = await getServices();
    return (
        <section className='mt-15 md:mt-25 lg:mt-32.5 flex flex-col items-center'>
            <h2 className='font-bold text-primary sm:text-xl text-lg'>Services</h2>
            <h3 className='font-bold text-main-dark text-4xl lg:text-[44px] my-5'>Our Service Area</h3>
            <p className='text-gray max-w-180 text-sm md:text-[16px] text-center mb-12.5 capitalize'>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    services.map(service => (
                        <div
                        className='p-6 rounded-md border border-border'
                        key={service._id}>
                            <Image height={208} width={314} className='rounded-md h-52' src={service.img} alt={service.title} />
                            <h4 className='font-bold text-light-dark my-5 text-xl md:text-2xl'>{service.title}</h4>
                            <div className='flex items-center justify-between'>
                                <p className='text-primary font-semibold md:text-xl'>Price: ${service.price}</p>
                                <Link href={`/services/${service._id}`}>
                                    <FaArrowRight height={24} width={24}  className='text-primary'/>
                                </Link>
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    );
};

export default Services;