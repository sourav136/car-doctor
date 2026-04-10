import clientPromise from '@/lib/mongodb';

const defaultFacility = [
  { name: "Instant Car Services", details: "Fuga numquam nulla nam..." },
  { name: "24/7 Quality Service", details: "Fuga numquam nulla nam..." },
  { name: "Easy Customer Service", details: "Fuga numquam nulla nam..." },
  { name: "Quality Cost Service", details: "Fuga numquam nulla nam..." }
];

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("carDoctor");

    const services = await db.collection("services").find().toArray();
    return new Response(JSON.stringify(services), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (error) {
    console.error("GET error:", error);
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}

export async function POST(req) {
  try {
    console.log("POST /api/services called");

    // Check content type
    const contentType = req.headers.get("content-type");
    console.log("Content-Type:", contentType);

    const body = await req.json();
    console.log("Body received:", body);

    body.facility = defaultFacility;

    const client = await clientPromise;
    const db = client.db("carDoctor");

    const result = await db.collection("services").insertOne(body);
    console.log("Insert result:", result);

    return new Response(JSON.stringify(result), {
      status: 201,
      headers: { "Content-Type": "application/json" }
    });
  } catch (error) {
    console.error("POST error:", error);
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}