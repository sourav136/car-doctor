import React from "react";
import Delete from "./Delete";
import { auth } from "@/auth";
import Link from "next/link";
import { getBookingsByEmail } from "@/lib/booking";
import clientPromise from "@/lib/mongodb";
import OrderStatus from "./OrderStatus";

const CartList = async () => {
  const session = await auth();
  const role = session?.user?.role === "admin";
  console.log(role);
  if (!session || !session.user) {
    return (
      <p className="text-gray text-center">
        Please log in to view your cart.
        <Link className="text-primary font-medium" href="/login">
          Login Here
        </Link>
      </p>
    );
  }
  let data;
  if (role) {
    const client = await clientPromise;
    const db = client.db("carDoctor");
    data = await db.collection("bookings").find().toArray();
  } else {
    data = await getBookingsByEmail(session.user.email);
  }
  const cartList = data.map((item) => ({
    ...item,
    _id: item._id.toString(),
  }));
  return (
    <section className="mt-15 md:mt-25 lg:mt-32.5">
      <ul>
        {cartList.length > 0 ? (
          cartList.map((item) => (
            <li key={item._id} className="flex mb-7">
              <div className="flex items-center">
                <Delete id={item._id} />
                <div className="h-20 w-20 md:h-30 md:w-30 lg:h-37.5 lg:w-37.5 mx-2 md:mx-7.5 ">
                  <img
                    src={item.service.image}
                    className="h-20 w-20 md:h-30 md:w-30 lg:h-37.5 lg:w-37.5  rounded-lg object-cover object-right "
                    alt={item.service.name}
                  />
                </div>
              </div>
              <div className="grid grid-cols-6 w-full">
                <div className="col-span-6 md:col-span-2 flex items-center flex-col justify-center">
                  <h2 className="text-light-dark font-semibold text-sm md:text-xl text-left block w-full">
                    {item.service.name}
                  </h2>
                  <p className="text-gray text-[10px] md:text-base text-left block w-full">
                    {new Date(item.updated_at).toLocaleDateString()}
                  </p>
                </div>
                <div className="col-span-3 md:col-span-2 flex items-center flex-col justify-center">
                  <h3 className="text-light-dark font-semibold text-[12px] lg:text-xl text-left w-full md:text-center md:w-auto">
                    {role ? item.customer.email : item.service.price}
                  </h3>
                </div>
                <div className="col-span-3 md:col-span-2 flex items-center flex-col justify-center z-100 bg-white">
                  {role ? (
                    <OrderStatus status={item.status} id={item._id}/>
                  ) : (
                    <h4 className="md:text-xl text-sm text-right w-full md:text-center md:w-auto text-primary md:text-white px-2  md:px-5  md:py-2.5 md:rounded-lg md:bg-primary">
                      {item.status}
                    </h4>
                  )}
                </div>
              </div>
            </li>
          ))
        ) : (
          <p className="text-gray text-center">Your cart is empty.</p>
        )}
        {/* {cartList.length > 0 ? (
          cartList.map((item) => (
            <li key={item._id} className="flex mb-7">
              <div className="flex items-center">
                <Delete id={item._id} />
                <div className="h-20 w-20 md:h-30 md:w-30 lg:h-37.5 lg:w-37.5 mx-2 md:mx-7.5 ">
                  <img
                    src={item.service.image}
                    className="h-20 w-20 md:h-30 md:w-30 lg:h-37.5 lg:w-37.5  rounded-lg object-cover object-right "
                    alt={item.service.name}
                  />
                </div>
              </div>
              <div className="grid grid-cols-6 w-full">
                <div className="col-span-6 md:col-span-2 flex items-center flex-col justify-center">
                  <h2 className="text-light-dark font-semibold text-sm md:text-xl text-left block w-full">
                    {item.service.name}
                  </h2>
                  <p className="text-gray text-[10px] md:text-base text-left block w-full">
                    {new Date(item.created_at).toLocaleDateString()}
                  </p>
                </div>
                <div className="col-span-3 md:col-span-2 flex items-center flex-col justify-center">
                  <h3 className="text-light-dark font-semibold text-sm md:text-xl text-left w-full md:text-center md:w-auto">
                    {item.service.price}
                  </h3>
                </div>
                <div className="col-span-3 md:col-span-2 flex items-center flex-col justify-center">
                  <h4 className="md:text-xl text-sm text-right w-full md:text-center md:w-auto text-primary md:text-white px-2  md:px-5  md:py-2.5 md:rounded-lg md:bg-primary">
                    {item.status}
                  </h4>
                </div>
              </div>
            </li>
          ))
        ) : (
          <p className="text-gray text-center">Your cart is empty.</p>
        )} */}
      </ul>
    </section>
  );
};

export default CartList;
