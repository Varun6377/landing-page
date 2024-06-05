"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Testimonial() {
  return (
    <div>
      <div className="text-center">
        <h1 className="font-medium">Testimonial</h1>
        <h2 className="font-bold text-3xl">What our users say about us?</h2>
      </div>
      <div className="md:flex items-center">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="md:w-1/2"
        >
          <Image
            src="/assets/testimonial.png"
            alt=""
            width={400}
            height={400}
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className="md:w-1/2"
        >
          <h4 className="ml-2 font-bold">
            The Best Financial Accounting App Ever!
          </h4>
          <p className="text-gray-500 p-2">
            “Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
            ultricies. In ultrices malesuada elit mauris etiam odio. Duis
            tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus,
            diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor
            neque lorem sapien, suspendisse aliquam.”
          </p>
          <Image
            className="ml-2"
            src="/assets/users.png"
            alt=""
            width={100}
            height={100}
          />
          <p className="ml-2 font-semibold mt-2">Nick Jones</p>
        </motion.div>
      </div>
    </div>
  );
}
