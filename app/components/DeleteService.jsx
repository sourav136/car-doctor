"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { MdDelete } from "react-icons/md";

const DeleteService = ({ id }) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleDelete = async () => {
    setLoading(true);
    await fetch(`/api/services/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    setLoading(false);
    router.refresh();
  };
  return (
    <>
      {loading ? (
        <span className="loading loading-spinner loading-md"></span>
      ) : (
        <MdDelete
          className="text-2xl text-primary cursor-pointer"
          onClick={handleDelete}
        />
      )}
    </>
  );
};

export default DeleteService;
