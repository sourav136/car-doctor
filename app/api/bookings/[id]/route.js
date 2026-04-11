import clientPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb";

export async function DELETE(req, context){
    const {id} = await context.params;

    const client = await clientPromise;
    const db = client.db("carDoctor");

    let query;
    if(ObjectId.isValid(id)) query = {_id: new ObjectId(id)};
    else query = {booking_id: id};

    const result = await db.collection("bookings").deleteOne(query);

    return Response.json(result);
}


export async function GET(req, context){
    const {id} = await context.params;

    const client = await clientPromise;
    const db = client.db("carDoctor");

    let query;
    if (ObjectId.isValid(id)) query = {_id: new ObjectId(id)}
    else query = {booking_id: id};

    const booking = await db.collection("bookings").findOne(query);
     if (!booking) return Response.json({error: "Booking not found"}, {status: 404});
     return Response.json(booking)

}