import clientPromise from "./mongodb";

export const getServices = async () => {
  const client = await clientPromise;
  const db = client.db("carDoctor");
  const services = await db.collection("services").find({}).toArray();
  return services;
};
