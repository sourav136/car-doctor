import CheckoutForm from "@/app/components/CheckoutForm";
import ServiceBanner from "@/app/components/ServiceBanner";
import React from "react";

async function getServiceDetails(id) {
  const response = await fetch(`http://localhost:3000/api/services/${id}`, {
    cache: "force-cache",
  });
  return response.json();
}

const checkout = async ({ params }) => {
  const { id } = await params;
  const serviceDetails = await getServiceDetails(id);
  return (
    <section>
      <ServiceBanner title="Checkout" routeTitle="Home/Checkout" />
      <CheckoutForm serviceDetails={serviceDetails} />
    </section>
  );
};

export default checkout;
