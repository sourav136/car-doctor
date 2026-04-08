"use client";
import { useRouter } from 'next/navigation';
import React from 'react';
import { RiDeleteBin7Line } from "react-icons/ri";

const DeleteAlllButton = () => {

    const router = useRouter();

    const handleDeleteAll = async()=>{
        if(!confirm("Clear Shopping Cart?")) return;

        const res = await fetch("/api/bookings", {
            method: "DELETE", 
            headers:{
                "Content-Type": "application/json"
            }, 
            body: JSON.stringify({})
        })

        if(res.ok){
            router.refresh();
        }
    }

    return (
        <div 
        className='md:text-xl text-light-dark flex gap-2 md:gap-5 cursor-pointer items-center'
        onClick={handleDeleteAll}>
            <RiDeleteBin7Line/>
            <span>Clear Shopping Cart</span>
        </div>
    );
};

export default DeleteAlllButton;