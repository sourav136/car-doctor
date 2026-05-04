"use client";
import { useRouter } from "next/navigation";
import React from "react";

const OrderStatus = ({status, id}) => {
    const router = useRouter();
  return (
    <select
      value={status}
      onChange={async (e) => {
        await fetch(`/api/bookings/${id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            status: e.target.value,
          }),
        });
        router.refresh();
      }}
      className={`ring outline-none px-2 py-1 rounded ${status === "Pending" ? "ring-primary text-primary " : status === "Approved" ? "ring-green-400 text-green-400" : "ring-red-600 text-red-600"}`}
    >
      <option value="Pending">Pending</option>
      <option value="Approved">Approved</option>
      <option value="Rejected">Rejected</option>
    </select>
  );
};

export default OrderStatus;
