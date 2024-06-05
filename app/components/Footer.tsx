import React from "react";
import Image from "next/image";

export default function Footer() {
  return (
    <>
      <div className="hidden sm:flex justify-evenly items-start md:p-10">
        <div className="space-y-2">
          <Image src="/assets/logo.png" alt="uirfy" width="75" height="75" />
          <span className="flex items-center  text-sm gap-x-1">
            <Image src="/assets/mail.png" alt="" width="20" height="20" />
            <p className="text-xs font-medium">Help@Frybix.com</p>
          </span>
          <span className="flex items-center text-sm gap-x-1">
            <Image src="/assets/call.png" alt="" width="20" height="20" />
            <p className="text-xs font-medium">+1 234 456 678 89</p>
          </span>
        </div>

        <div className="space-y-2">
          <h1 className="font-bold">Links</h1>
          <p className="text-xs font-medium">Home</p>
          <p className="text-xs font-medium">About Us</p>
          <p className="text-xs font-medium">Bookings</p>
          <p className="text-xs font-medium"> Blog</p>
        </div>

        <div className="space-y-2">
          <h1 className="font-bold">Legal</h1>
          <p className="text-xs font-medium">Terms Of Use</p>
          <p className="text-xs font-medium">Privacy Policy</p>
          <p className="text-xs font-medium">Cookie Policy</p>
        </div>

        <div className="space-y-2">
          <h1 className="font-bold space-y-10">Product</h1>
          <p className="text-xs font-medium">Take Tour</p>
          <p className="text-xs font-medium">Live Chat</p>
          <p className="text-xs font-medium">Reviews</p>
        </div>

        <div className="space-y-2">
          <h1 className="font-bold">Newsletter</h1>
          <p className="text-xs font-medium mb-10">Stay Up To date</p>
          <input
            type="text"
            placeholder="Your email"
            className="w-20 text-xs font-medium"
          />
          <button className="bg-black text-white px-4 py-2 rounded text-xs font-medium">
            Subscribe
          </button>
        </div>
      </div>{" "}
      <hr className="border-t border-gray-300" />
      <div className="text-center">
        <hr className="border-t border-gray-400 my-4 mx-20" />
        <p className="text-xs font-medium">
          Copyright 2022 uifry.com all rights reserved
        </p>
      </div>
    </>
  );
}
