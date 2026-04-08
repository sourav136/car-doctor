"use client"
import React from "react";
import { RxCross2 } from "react-icons/rx";

const getCartList = async () => {
  const response = await fetch("http://localhost:3000/api/bookings", {
    cache: "no-store",
  });
  return response.json();
};

const Delete = ({id}) => {

    const handleDelete = async() => {
        await fetch("/api/bookings", {
        method: "DELETE", 
        headers:{
            "Content-Type": "application/json"
        },
        body:JSON.stringify({id})
    })
    const bookings = await getCartList();
    console.log(bookings)
    }

  return (
    <div 
    className="p-1 md:p-2.5 bg-light-dark rounded-full cursor-pointer"
    onClick={handleDelete}>
      <RxCross2 className="text-white text-sm md:text-xl" />
    </div>
  );
};

export default Delete;
