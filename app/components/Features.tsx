"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Features() {
  return (
    <div className="px-4">
      <section className="flex flex-col md:flex-row mb-10">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.5 }}
          className="hidden md:w-1/2 md:flex justify-center md:justify-start mb-6 md:mb-0"
        >
          <Image
            src="/assets/feature-a.png"
            alt=""
            width={400}
            height={400}
            className="z-10"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="md:w-1/2"
        >
          <h1 className="text-customRed text-base font-semibold">Features</h1>
          <h2 className="text-xl font-black">Uifry Premium</h2>
          <div className="flex items-center gap-x-1 my-2">
            <Image src="/assets/star.png" alt="" width={20} height={20} />
            <p className="font-bold text-sm">Budgeting Intervals</p>
          </div>
          <p className="mb-4 text-gray-500">
            Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
            faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
          </p>
          <div className="flex items-center gap-x-1 my-2">
            <Image src="/assets/hexagon.png" alt="" width={20} height={20} />
            <p className="font-bold text-sm">Budgeting Intervals</p>
          </div>
          <p className="mb-4 text-gray-500">
            Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
            faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
          </p>
          <div className="flex items-center gap-x-1 my-2">
            <Image src="/assets/cube.png" alt="" width={20} height={20} />
            <p className="font-bold text-sm">Budgeting Intervals</p>
          </div>
          <p className="mb-4 text-gray-500">
            Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
            faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
          </p>
        </motion.div>{" "}
      </section>

      <section className="flex items-center flex-col md:flex-row">
        <div className="md:w-1/2 mt-10 md:mt-0">
          <h1 className="text-customRed text-base font-semibold">Advantages</h1>
          <h2 className="text-xl font-black">Why Choose Uifry?</h2>
          <div className="flex items-center gap-x-1 my-2">
            <Image src="/assets/bell.png" alt="" width={20} height={20} />
            <p className="font-bold text-sm">Clever Notifications</p>
          </div>
          <p className="mb-4 text-gray-500">
            Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies.
            In ultrices malesuada elit mauris etiam odio. Duis tristique lacus,
            et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse
            sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien,
            suspendisse aliquam.
          </p>
        </div>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className="hidden md:w-1/2 md:flex justify-center md:justify-end mt-10 md:mt-0"
        >
          <Image
            src="/assets/feature-b.png"
            alt=""
            width={400}
            height={400}
            className="z-10"
          />
        </motion.div>
      </section>

      <section className="flex items-center flex-col md:flex-row">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="hidden md:w-1/2 md:flex justify-center md:justify-start mb-10 md:mb-0"
        >
          <Image
            src="/assets/feature-a.png"
            alt=""
            width={400}
            height={400}
            className="z-10"
          />
        </motion.div>
        <div className="md:w-1/2">
          <div className="flex items-center gap-x-1 my-2">
            <Image src="/assets/star.png" alt="" width={20} height={20} />
            <p className="font-bold text-sm">Fully Customizable</p>
          </div>
          <p className="mb-4 text-gray-500">
            Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies.
            In ultrices malesuada elit mauris etiam odio. Duis tristique lacus,
            et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse
            sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien,
            suspendisse aliquam.
          </p>
        </div>
      </section>
    </div>
  );
}
