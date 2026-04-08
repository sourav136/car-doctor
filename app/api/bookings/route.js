let bookings = [];

export async function POST(req){
    const data = await req.json();

    const newBooking = {
        id: Date.now().toString(),
        ...data,
        status: "Pending"
    };

    bookings.push(newBooking);
    return Response.json({success: true});
}

export async function GET(){
    return Response.json(bookings);
}

export async function DELETE(req){
    const {id} = await req.json();

    bookings= bookings.filter(b => b.id !== id);
    return Response.json({success: true});
}