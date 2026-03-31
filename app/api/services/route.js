import {services} from '@/lib/data/services';

export async function GET() {
    return Response.json(services);
}