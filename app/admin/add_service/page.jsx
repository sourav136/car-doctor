import AddServicesForm from '@/app/components/AddServicesForm';
import Banner from '../../components/Banner';
import React from 'react';
import { getServices } from '@/lib/service';

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