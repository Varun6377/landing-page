import React from "react";
import Image from "next/image";

export default function FAQ() {
  return (
    <div className="md:p-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-customRed text-3xl font-bold mb-4">FAQ</h1>
        <h2 className="text-xl font-semibold mb-8">
          Frequently asked questions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-customRed text-white p-4 rounded shadow-md">
            <h4 className="text-lg font-semibold mb-2">
              The Best Financial Accounting App Ever!
            </h4>
            <p>
              Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
              ultricies. In ultrices malesuada elit mauris.
            </p>
          </div>
          <div className="bg-white p-4 rounded shadow-md">
            <h4 className="text-lg font-semibold mb-2">
              The Best Financial Accounting App Ever!
            </h4>
            <p>
              Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
              ultricies. In ultrices malesuada elit mauris.
            </p>
          </div>
          <div className="bg-customRed text-white md:bg-white md:text-black p-4 rounded shadow-md">
            <h4 className="text-lg font-semibold mb-2">
              The Best Financial Accounting App Ever!
            </h4>
            <p>
              Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
              ultricies. In ultrices malesuada elit mauris.
            </p>
          </div>
          <div className="md:bg-customRed md:text-white p-4 rounded shadow-md">
            <h4 className="text-lg font-semibold mb-2">
              The Best Financial Accounting App Ever!
            </h4>
            <p>
              Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
              ultricies. In ultrices malesuada elit mauris.
            </p>
          </div>
          <div className="bg-customRed text-white p-4 rounded shadow-md">
            <h4 className="text-lg font-semibold mb-2">
              The Best Financial Accounting App Ever!
            </h4>
            <p>
              Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
              ultricies. In ultrices malesuada elit mauris.
            </p>
          </div>
          <div className="bg-white p-4 rounded shadow-md">
            <h4 className="text-lg font-semibold mb-2">
              The Best Financial Accounting App Ever!
            </h4>
            <p>
              Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
              ultricies. In ultrices malesuada elit mauris.
            </p>
          </div>
        </div>
      </div>
      <div className="md:hidden">
        <Image
          src="/assets/Frame.png"
          alt=""
          width={800}
          height={800}
          className="mx-auto mt-10"
        />
      </div>
    </div>
  );
}
