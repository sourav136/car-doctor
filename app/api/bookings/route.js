import { auth } from "@/auth";
import { getBookingsByEmail } from "@/lib/booking";
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
      updated_at: new Date(),
    };

    const result = await db.collection("bookings").insertOne(order);
    return Response.json(result, { status: 201 });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}

export async function GET() {
  try {
    const session = await auth();
    console.log("SESSION:", session);
    if (!session || !session.user) {
      return Response.json({ error: "Unauthorized" }, { status: 401 });
    }
    const client = await clientPromise;
    const db = client.db("carDoctor");
    let bookings;

    if (session.user.role === "admin") {
      bookings = await db.collection("bookings").find().toArray();
    } else {
      bookings = await getBookingsByEmail(session.user.email);
    }

    return Response.json(bookings, { status: 200 });
  } catch (error) {
    console.error("BOOKINGS GET ERROR:", error.message); // ← this will tell you the real problem
    return Response.json({ error: "Failed to fetch bookings" }, { status: 500 });
  }
}
