"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const AddServicesForm = ({count}) => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  console.log(count);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const formData = {
      service_id: count,
      serviceName: e.target.serviceName.value,
      price: e.target.price.value,
      image: e.target.image.value,
      description: e.target.description.value,
    };
    try {
      await fetch("/api/services", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      router.push("/services");
      e.target.reset();
    } catch (error) {
      console.error("Error submitting new service:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <form
        className="mt-10 bg-bg rounded-lg p-10 md:p-15 lg:p-24"
        onSubmit={handleSubmit}
        aria-label="Checkout Form"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="relative">
            <input
              type="text"
              id="serviceName"
              name="serviceName"
              required
              placeholder=" "
              className="peer w-full border px-4 pt-5 pb-2 rounded-lg bg-white focus:outline-none border-none"
            />

            <label
              htmlFor="serviceName"
              className="absolute left-4 top-2 text-sm text-form transition-all 
                peer-placeholder-shown:top-3.5 
                peer-placeholder-shown:text-base 
                peer-focus:-top-2
                peer-focus:text-sm
                "
            >
              Service Name
            </label>
          </div>
          <div className="relative">
            <input
              type="number"
              id="price"
              name="price"
              required
              placeholder=" "
              className="peer w-full border px-4 pt-5 pb-2 rounded-lg bg-white focus:outline-none border-none"
            />

            <label
              htmlFor="price"
              className="absolute left-4 top-2 text-sm text-form transition-all 
                peer-placeholder-shown:top-3.5 
                peer-placeholder-shown:text-base 
                peer-focus:-top-2
                peer-focus:text-sm
                "
            >
              Price
            </label>
          </div>
          <div className="relative md:col-span-2">
            <input
              type="text"
              id="image"
              name="image"
              required
              placeholder=" "
              className="peer w-full border px-4 pt-5 pb-2 rounded-lg bg-white focus:outline-none border-none"
            />

            <label
              htmlFor="image"
              className="absolute left-4 top-2 text-sm text-form transition-all 
                peer-placeholder-shown:top-3.5 
                peer-placeholder-shown:text-base 
                peer-focus:-top-2
                peer-focus:text-sm
                "
            >
              Image Url
            </label>
          </div>
          <div className="relative md:col-span-2">
            <textarea
              id="description"
              name="description"
              required
              placeholder=" "
              rows="6"
              className="peer w-full border px-4 pt-5 pb-2 rounded-lg bg-white focus:outline-none border-none resize-none "
            />

            <label
              htmlFor="description"
              className="absolute left-4 top-2 text-sm text-form transition-all 
                peer-placeholder-shown:top-3.5 
                peer-placeholder-shown:text-base 
                peer-focus:-top-2
                peer-focus:text-sm
                "
            >
              Description
            </label>
          </div>
        </div>
        <button
          className="w-full py-4 bg-primary text-white text-center text-xl font-semibold hover:ring-2 hover:ring-primary hover:text-primary hover:bg-transparent transition duration-300 rounded-lg mt-6 cursor-pointer"
          type="submit"
        >
          {loading ? (
            <span className="loading loading-spinner loading-md"></span>
          ) : (
            "Add Service"
          )}
        </button>
      </form>
    </div>
  );
};
export default AddServicesForm;
