import { auth } from "@/auth";
import clientPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb";

export async function GET(req, context) {
  const { id } = await context.params;

  if (!id) return Response.json({ message: "Id not found" }, { status: 400 });

  const client = await clientPromise;
  const db = client.db("carDoctor");

  let query;

  if (ObjectId.isValid(id)) {
    query = { _id: new ObjectId(id) };
  } else {
    query = { service_id: id };
  }

  const service = await db.collection("services").findOne(query);

  if (!service)
    return Response.json({ error: "Service not found" }, { status: 404 });

  return Response.json(service);
}

export async function DELETE(req, context) {
  const session = await auth();
  if (!session || !session.user || session?.user?.role !== "admin")
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  const { id } = await context.params;

  const client = await clientPromise;
  const db = client.db("carDoctor");

  const result = await db
    .collection("services")
    .deleteOne({ _id: new ObjectId(id) });
  revalidatePath("/services");
  return Response.json({ success: true });
}

// export async function GET(req, {params}) {
//   const { id } = await params;

//   const service = services.find(s => s._id === id);

//   if (!service) {
//     return Response.json({ message: "Service not found" }, { status: 404 });
//   }

//   return Response.json(service);
// }
