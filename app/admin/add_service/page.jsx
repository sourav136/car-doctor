import AddServicesForm from '@/app/components/AddServicesForm';
import Banner from '../../components/Banner';
import React from 'react';

async function getServices(){
    const response = await fetch("http://localhost:3000/api/services", {
        cache:"force-cache",
    })
    return response.json();
}

const AddServicesPage = async () => {
    const services = await getServices();
    const count = services.length + 1;
    return (
        <div>
            <Banner title="Add New Service" img="/assets/images/banner/6.jpg" routeTitle="Home/Admin"/>
            {count && <AddServicesForm count = {count}/>}
        </div>
    );
};

export default AddServicesPage;