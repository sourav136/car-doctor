import clientPromise from "@/lib/mongodb";
import bcrypt from "bcryptjs";

export async function POST(req){
    const body = await req.json();
    const client = await clientPromise;
    const db = client.db("carDoctor");

    const hashedPassword = await bcrypt.hash(body.password, 10)
    const user = {
        name: body.name,
        email: body.email,
        password: hashedPassword,
        role: "user"
    }
    await db.collection("users").insertOne(user);
    return Response.json({message:"User created successfully"})
}