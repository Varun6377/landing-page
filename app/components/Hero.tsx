"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div className="sm:flex space-x-3">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Image
          src="/assets/Star-Tilted.png"
          alt="star "
          width={25}
          height={25}
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="sm:w-1/2 relative"
      >
        <h1 className="font-extrabold text-4xl">
          Make The Best Financial Decisions
        </h1>
        <h1 className="text-gray-500 text-xs m-2">
          Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
          faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
        </h1>
        <div className="flex gap-x-6">
          <button className="flex items-center gap-x-2 p-3 rounded-md bg-black text-white">
            <p className="text-base"> Get Started</p>
            <Image src="/assets/arrow.png" alt="" width={30} height={50} />
          </button>
          <button className="flex items-center gap-x-2">
            <Image
              src="/assets/play-button.png"
              alt=""
              width={20}
              height={20}
            />
            <p className="text-xl">Watch Video</p>
          </button>
        </div>{" "}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src="/assets/hero-section.png"
            alt=""
            width={500}
            height={600}
          />
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 100 }}
        transition={{ duration: 0.5 }}
        className="flex justify-center sm:w-1/2"
      >
        <div>
          <Image
            src="/assets/iPhone-13-Pro-Front.png"
            alt=""
            width={500}
            height={500}
          />
        </div>
      </motion.div>
    </div>
  );
}
