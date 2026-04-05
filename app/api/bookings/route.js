let bookings = [];

export async function POST(req){
    const data = await req.json();

    const newBooking = {
        date: Date.now().toString(),
        ...data,
        status: "pending"
    };

    bookings.push(newBooking);
    return Response.json({succes: true});
}