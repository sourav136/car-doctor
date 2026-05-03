import React from "react";
import Delete from "./Delete";
import { auth } from "@/auth";
import Link from "next/link";
import { getBookingsByEmail } from "@/lib/booking";

const CartList = async () => {
  const session = await auth();
  if (!session || !session.user) {
    return <p className="text-gray text-center">Please log in to view your cart.<Link className="text-primary font-medium" href="/login">Login Here</Link></p>;
  }
  const data = await getBookingsByEmail(session.user.email);
  const cartList = data.map((item) => ({
    ...item,
    _id: item._id.toString(), 
  })); 
  return (
    <section className="mt-15 md:mt-25 lg:mt-32.5">
      <ul>
        {cartList.length> 0 ? (
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
              <div className="flex justify-between items-center w-full">
                <div>
                  <h2 className="text-light-dark font-semibold text-sm md:text-xl">
                    {item.service.name}
                  </h2>
                  <p className="text-gray text-[10px] md:text-base">
                    {new Date(item.created_at).toLocaleDateString()}
                  </p>
                </div>
                <h3 className="text-light-dark font-semibold text-sm md:text-xl">
                  {item.service.price}
                </h3>
                <h4 className="md:text-xl text-sm text-primary md:text-white px-2  md:px-5  md:py-2.5 md:rounded-lg md:bg-primary">
                  {item.status}
                </h4>
              </div>
            </li>
          ))
        ) : (
          <p className="text-gray text-center">Your cart is empty.</p>
        )}
      </ul>
    </section>
  );
};

export default CartList;
