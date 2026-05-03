"use client"
import { useRouter } from "next/navigation";
import React from "react";
import { RxCross2 } from "react-icons/rx";

const Delete = ({id}) => {
    const router = useRouter();
    const handleDelete = async() => {
        await fetch(`/api/bookings/${id}`, {
        method: "DELETE", 
        headers:{
            "Content-Type": "application/json"
        },
        body:JSON.stringify({id})
    })
    router.refresh();
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
