import React from 'react';
import Banner from '../components/Banner';
import AboutUs from '../components/AboutUs';
import Team from '../components/Team';

const AboutPage = () => {
    return (
        <>
            <Banner title="About Us" routeTitle="Home/About Us" img="/assets/images/homeCarousel/1.jpg"/>
            <AboutUs title={"Our Services"} href={"/services"}/>
            <Team/>
        </>
    );
};

export default AboutPage;