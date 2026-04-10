import clientPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb";


export async function GET(req, context){
  console.log(context.params);
  const {id} = await context.params;

  if (!id) return Response.json({message: "Id not found"}, {status: 400});

  const client = await clientPromise;
  const db = client.db("carDoctor");

  let query;

  if (ObjectId.isValid(id)){
    query = {_id: new ObjectId(id)};
  } else {
    query = {service_id: id}
  }

  const service = await db.collection("services").findOne(query);

  if(!service) return Response.json({error: "Service not found"}, {status: 404});

  return Response.json(service);
}


// export async function GET(req, {params}) {
//   const { id } = await params;

//   const service = services.find(s => s._id === id);

//   if (!service) {
//     return Response.json({ message: "Service not found" }, { status: 404 });
//   }

//   return Response.json(service);
// }