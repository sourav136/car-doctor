import CheckoutForm from "@/app/components/CheckoutForm";
import ServiceBanner from "@/app/components/ServiceBanner";
import clientPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb";
import { notFound } from "next/navigation";
import React from "react";

async function getServiceDetails(id) {
  const client = await clientPromise;
  const db = client.db("carDoctor");
  if (!ObjectId.isValid(id)) return null;
  const service =  await db.collection("services").findOne({_id: new ObjectId(id)});
  if (!service) return null;
  return {
    ...service, 
    _id: service._id.toString()
  };
}

const checkout = async ({ params }) => {
  const { id } = await params;
  const serviceDetails = await getServiceDetails(id);
  if(!serviceDetails) return notFound();
  return (
    <section>
      <ServiceBanner title="Checkout" routeTitle="Home/Checkout" />
      <CheckoutForm serviceDetails={serviceDetails} />
    </section>
  );
};

export default checkout;
