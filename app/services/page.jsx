import React from 'react';
import ServiceBanner from './../components/ServiceBanner';
import Services from '../components/Services';

const ServicesPage = () => {
    return (
        <>
            <ServiceBanner title="Services" routeTitle="Home/Services"/>
            <Services/>
        </>
    );
};

export default ServicesPage;