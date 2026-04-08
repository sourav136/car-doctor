import React from 'react';
import Banner from '../components/Banner';
import CartList from '../components/CartList';
import Link from 'next/link';
import { IoReturnUpBack } from "react-icons/io5";
import DeleteAlllButton from '../components/DeleteAlllButton';

const Cart = () => {
    return (
        <>
            <Banner title="Cart Details" routeTitle="Home/Cart Details" img="/assets/images/checkout/checkout.png"/>
            <CartList/>
            <section className='flex justify-between mt-3'>
                <Link className='md:text-xl text-light-dark flex gap-2 md:gap-5 items-center' href="/services"><IoReturnUpBack /> Back to Services</Link>
                <DeleteAlllButton/>
            </section>
        </>
    );
};

export default Cart;