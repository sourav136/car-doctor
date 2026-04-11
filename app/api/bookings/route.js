import clientPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb";

export async function POST(req) {
  try {
    const body = await req.json();
    const client = await clientPromise;
    const db = client.db("carDoctor");

    const order = {
      service: {
        id: new ObjectId(body.serviceId),
        name: body.serviceName,
        image: body.image,
        price: body.price,
      },
      customer: {
        firstName: body.firstName,
        lastName: body.lastName,
        phone: body.phone,
        email: body.email,
        message: body.message,
      },
      status: "Pending", 
      created_at: new Date(), 
      updated_at: new Date()
    };

    const result = await db.collection("bookings").insertOne(order);
    return Response.json(result,  {status: 201});
  } catch (error) {
    return Response.json({error: error.message},  {status:500});
  }
}

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("carDoctor");

    const bookings = await db.collection("bookings").find().toArray();
    console.log("BOOKINGS:", bookings); // check terminal
    
    return new Response(JSON.stringify(bookings), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (error) {
    console.error("BOOKINGS GET ERROR:", error.message); // ← this will tell you the real problem
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
}
