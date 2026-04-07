import React from 'react';
import Banner from '../components/Banner';
import CartList from '../components/CartList';

const Cart = () => {
    return (
        <>
            <Banner title="Cart Details" routeTitle="Home/Cart Details" img="/assets/images/checkout/checkout.png"/>
            <CartList/>
        </>
    );
};

export default Cart;