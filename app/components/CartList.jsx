import React from "react";
import Delete from "./Delete";

const getCartList = async () => {
  const response = await fetch("http://localhost:3000/api/bookings", {
    cache: "no-store",
  });
  return response.json();
};

const CartList = async () => {
  const cartList = await getCartList();
  console.log(cartList);
  // serviceId: serviceDetails._id,
  // serviceName: serviceDetails.title,
  // price: serviceDetails.price,
  // firstName: e.target.firstName.value,
  // lastName: e.target.lastName.value,
  // phone: e.target.phone.value,
  // email: e.target.email.value,
  // message: e.target.message.value,
  return (
    <section className="mt-15 md:mt-25 lg:mt-32.5">
      <ul>
        {cartList ? (
          cartList.map((item) => (
            <li key={item.serviceId} className="flex mb-7">
              <div className="flex items-center">
                <Delete id={item.id} />
                <div className="h-20 w-20 md:h-30 md:w-30 lg:h-37.5 lg:w-37.5 mx-2 md:mx-7.5 ">
                  <img
                    src={item.image}
                    className="h-20 w-20 md:h-30 md:w-30 lg:h-37.5 lg:w-37.5  rounded-lg object-cover object-right "
                    alt={item.serviceName}
                  />
                </div>
              </div>
              <div className="flex justify-between items-center w-full">
                <div>
                  <h2 className="text-light-dark font-semibold text-sm md:text-xl">
                    {item.serviceName}
                  </h2>
                  <p className="text-gray text-[10px] md:text-base">
                    {item.id}
                  </p>
                </div>
                <h3 className="text-light-dark font-semibold text-sm md:text-xl">
                  {item.price}
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
