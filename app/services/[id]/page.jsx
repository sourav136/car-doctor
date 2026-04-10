import ServiceBanner from '@/app/components/ServiceBanner';
import Steps from '@/app/components/Steps';
import { SERVER_RUNTIME } from 'next/dist/lib/constants';
import Link from 'next/link';
import React from 'react';
import { FaArrowRight } from 'react-icons/fa6';
import Download from './../../components/Download';

async function getServiceDetails(id){
    const response = await fetch(`http://localhost:3000/api/services/${id}`, {
        cache: "force-cache",
    })
    return response.json();
}

async function getServices(){
    const response = await fetch("http://localhost:3000/api/services", {
        cache:"force-cache",
    })
    return response.json();
}

export default async function ServiceDetails({params}) {

    const {id} = await params;
    const serviceDetails = await getServiceDetails(id);
    const services = await getServices();
    const otherServices = services.filter(services => services._id !== id);


    return (
        <section>
            <ServiceBanner title="Service Details" routeTitle="Home/Service Details"/>
            <div className='grid grid-cols-12 gap-6 mt-15 md:mt-25 lg:mt-32.5'>
                <div className='col-span-12 md:col-span-8'>
                    <img src={serviceDetails.img} alt={serviceDetails.title} className='w-full rounded-lg'/>
                    <h2 className='text-main-dark font-bold text-4xl mt-12.5 mb-7.5'>{serviceDetails.title}</h2>
                    <p className='text-gray '>{serviceDetails.description}</p>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 mt-7.5'>
                        {serviceDetails?.facility?.map((facility, index) =>(
                            <div 
                            key={index}
                            className='p-10 rounded-lg border-t-2 border-primary bg-bg hover:shadow-[0_10px_15px_-3px_rgba(0,0,0,0.3)] transition duration-300'>
                            <h3 className='text-light-dark font-bold text-xl mb-2.5 text-center lg:text-left'>{facility.name}</h3>
                            <p className='text-gray text-center lg:text-left'>{facility.details}</p>
                        </div>
                        ))}
                    </div>
                    <Steps/>
                </div>
                <div className='col-span-12 md:col-span-4 flex flex-col gap-7.5'>
                    <div className='bg-bg p-10 md:p-5 lg:p-10 rounded-lg  order-2 md:order-1'>
                        <h4 className='text-2xl text-main-dark font-bold mb-5'>Services</h4>
                        <nav className='w-full flex flex-col gap-5'>
                            {otherServices.map(service =>(
                                <Link key={service._id} href={`/services/${service._id}`} className="p-4.5 bg-white hover:bg-primary duration-300 transition w-full rounded-md flex justify-between text-main-dark hover:text-white font-semibold">
                                    <span className=' '>{service.title}</span>
                                    <FaArrowRight height={24} width={24} />
                                </Link>
                            ))}
                        </nav>
                    </div>
                    <Download/>
                    <img className='w-full  order-4 md:order-3' src="/assets/images/Ad.png" alt="Advertisement" />
                    <div className='flex flex-col gap-7.5  order-1 md:order-4'>
                        <h5 className='text-main-dark font-bold text-4xl'>Price: ${serviceDetails.price}</h5>
                        <Link className='w-full py-4 text-center text-white bg-primary text-lg font-semibold' href={`/checkout/${serviceDetails._id}`}>Proceed Checkout</Link>
                    </div>
                </div>
            </div>
        </section>
    );
};