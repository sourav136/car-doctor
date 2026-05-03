import clientPromise from "./mongodb"

export const getBookingsByEmail = async (email)=>{
    const client = await clientPromise;
    const db = client.db("carDoctor");
    const bookings = await db.collection("bookings").find({"customer.email": email}).toArray();
    return bookings
}