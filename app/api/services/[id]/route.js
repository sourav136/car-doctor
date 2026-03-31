import { services } from "@/lib/data/services";

export async function GET(req, {params}) {
  const { id } = await params;

  const service = services.find(s => s._id === id);

  if (!service) {
    return Response.json({ message: "Service not found" }, { status: 404 });
  }

  return Response.json(service);
}