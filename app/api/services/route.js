import { auth } from "@/auth";
import clientPromise from "@/lib/mongodb";

const defaultFacility = [
  { name: "Instant Car Services", details: "Fuga numquam nulla nam..." },
  { name: "24/7 Quality Service", details: "Fuga numquam nulla nam..." },
  { name: "Easy Customer Service", details: "Fuga numquam nulla nam..." },
  { name: "Quality Cost Service", details: "Fuga numquam nulla nam..." },
];

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("carDoctor");

    const services = await db.collection("services").find().toArray();
    return new Response(JSON.stringify(services), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("GET error:", error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }
}

export async function POST(req) {
  try {
    const session = await auth();
    if (!session || !session.user || session.user.role !== "admin") {
      return Response.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await req.json();
    const client = await clientPromise;
    const db = client.db("carDoctor");

    const newService = {
      service_id: body.serviceId,
      title: body.serviceName,
      img: body.image,
      price: body.price,
      description: body.description,
      facility: defaultFacility,
    };
    const result = await db.collection("services").insertOne(newService);
    revalidatePath("/services")
    return Response.json({ message: "Service added successfully" }, { status: 201 });
  } catch (error) {
    console.error("POST error:", error);
    return Response.json({ error: error.message }, { status: 500 });
  }
}
