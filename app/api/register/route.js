import clientPromise from "@/lib/mongodb";

export async function POST(req){
    const body = await req.json();
    const client = await clientPromise;
    const db = client.db("carDoctor");
    const user = {
        name: body.name,
        email: body.email,
        password: body.password,
        role: "user"
    }
    await db.collection("users").insertOne(user);
    return Response.json({message:"User created successfully"})
}