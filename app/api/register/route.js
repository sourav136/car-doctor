import clientPromise from "@/lib/mongodb";
import bcrypt from "bcryptjs";

export async function POST(req) {
  try {
    const body = await req.json();
    const client = await clientPromise;
    const db = client.db("carDoctor");

    const existingUser = await db.collection("users").find({
      email: body.email,
    });
    if (existingUser) {
      return Response.json({ message: "User already exists" }, { status: 409 });
    }

    const hashedPassword = await bcrypt.hash(body.password, 10);
    const user = {
      name: body.name,
      email: body.email,
      password: hashedPassword,
      role: "user",
    };
    await db.collection("users").insertOne(user);
    return Response.json(
      { message: "User created successfully" },
      { status: 201 },
    );
  } catch (error) {
    return Response.json({ error: "Internal server error" }, { status: 500 });
  }
}
