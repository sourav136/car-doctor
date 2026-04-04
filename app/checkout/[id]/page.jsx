import CheckoutForm from "@/app/components/CheckoutForm";
import ServiceBanner from "@/app/components/ServiceBanner";
import React from "react";

const checkout = () => {
  return (
    <section>
      <ServiceBanner title="Checkout" routeTitle="Home/Checkout" />
      <CheckoutForm />
    </section>
  );
};

export default checkout;
