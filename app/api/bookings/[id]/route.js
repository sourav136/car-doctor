import { auth } from "@/auth";
import clientPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb";

export async function DELETE(req, context) {
  const session = await auth();
  if (!session || !session.user)
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  const { id } = await context.params;

  const client = await clientPromise;
  const db = client.db("carDoctor");

  let query;
  if (session.user.role === "admin") {
    query = { _id: new ObjectId(id) };
  } else {
    query = { _id: new ObjectId(id), "customer.email": session.user.email };
  }

  const result = await db.collection("bookings").deleteOne(query);

  return Response.json(result);
}

export async function PATCH(req, context) {
  try {
    const session = await auth();
    if (!session || !session.user)
      return Response.json({ error: "Unauthorized" }, { status: 401 });

    const { id } = await context.params;
    const body = await req.json();

    const client = await clientPromise;
    const db = client.db("carDoctor");

    const result = await db.collection("bookings").updateOne(
      { _id: new ObjectId(id) },
      {
        $set: {
          status: body.status,
          updated_at: new Date(),
        },
      },
    );
    return Response.json(result);
  } catch (eror) {
    return Response.json({error: "Something went worng"}, {status: 500})
  }
}

export async function GET(req, context) {
  const { id } = await context.params;

  const client = await clientPromise;
  const db = client.db("carDoctor");

  let query;
  if (ObjectId.isValid(id)) query = { _id: new ObjectId(id) };
  else query = { booking_id: id };

  const booking = await db.collection("bookings").findOne(query);
  if (!booking)
    return Response.json({ error: "Booking not found" }, { status: 404 });
  return Response.json(booking);
}
