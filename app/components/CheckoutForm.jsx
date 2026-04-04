import React from "react";

const CheckoutForm = () => {
  return (
    <form 
    className="mt-15 md:mt-25 lg:mt-32.5 bg-bg rounded-lg p-10 md:p-15 lg:p-24"

    aria-label="Checkout Form">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="relative">
          <input
            type="text"
            id="firstName"
            name="firstName"
            required
            placeholder=" "
            className="peer w-full border px-4 pt-5 pb-2 rounded-lg bg-white focus:outline-none border-none"
          />

          <label
            htmlFor="firstName"
            className="absolute left-4 top-2 text-sm text-form transition-all 
               peer-placeholder-shown:top-3.5 
               peer-placeholder-shown:text-base 
               peer-focus:-top-2
               peer-focus:text-sm
               "
          >
            First Name
          </label>
        </div>
        <div className="relative">
          <input
            type="text"
            id="lastName"
            name="lastName"
            required
            placeholder=" "
            className="peer w-full border px-4 pt-5 pb-2 rounded-lg bg-white focus:outline-none border-none"
          />

          <label
            htmlFor="lastName"
            className="absolute left-4 top-2 text-sm text-form transition-all 
               peer-placeholder-shown:top-3.5 
               peer-placeholder-shown:text-base 
               peer-focus:-top-2
               peer-focus:text-sm
               "
          >
            Last Name
          </label>
        </div>
        <div className="relative">
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            placeholder=" "
            className="peer w-full border px-4 pt-5 pb-2 rounded-lg bg-white focus:outline-none border-none"
          />

          <label
            htmlFor="phone"
            className="absolute left-4 top-2 text-sm text-form transition-all 
               peer-placeholder-shown:top-3.5 
               peer-placeholder-shown:text-base 
               peer-focus:-top-2
               peer-focus:text-sm
               "
          >
            Your Phone 
          </label>
        </div>
        <div className="relative">
          <input
            type="email"
            id="email"
            name="email"
            required
            placeholder=" "
            className="peer w-full border px-4 pt-5 pb-2 rounded-lg bg-white focus:outline-none border-none"
          />

          <label
            htmlFor="email"
            className="absolute left-4 top-2 text-sm text-form transition-all 
               peer-placeholder-shown:top-3.5 
               peer-placeholder-shown:text-base 
               peer-focus:-top-2
               peer-focus:text-sm
               "
          >
            Your Email
          </label>
        </div>
        <div className="relative md:col-span-2">
          <textarea
            id="message"
            name="message"
            required
            placeholder=" "
            rows="6"
            className="peer w-full border px-4 pt-5 pb-2 rounded-lg bg-white focus:outline-none border-none resize-none "
          />

          <label
            htmlFor="message"
            className="absolute left-4 top-2 text-sm text-form transition-all 
               peer-placeholder-shown:top-3.5 
               peer-placeholder-shown:text-base 
               peer-focus:-top-2
               peer-focus:text-sm
               "
          >
            Your Message
          </label>
        </div>
      </div>
      <button className="w-full py-4 bg-primary text-white text-center text-xl font-semibold hover:ring-2 hover:ring-primary hover:text-primary hover:bg-transparent transition duration-300 rounded-lg mt-6 cursor-pointer" type="submit">Confirm Order</button>
    </form>
  );
};

export default CheckoutForm;
