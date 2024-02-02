import Link from "next/link";
import React from "react";

export default function PricingSection() {
  return (
    <section
      id="pricing"
      className="flex flex-col px-40 justify-between items-center h-[100vh] pt-[13vh] mb-[10vh]"
    >
      <h2 className="text-4xl font-bold">Pricing</h2>
      <div className="grid grid-cols-3 h-[70vh] w-full gap-x-6">
        <div className="flex flex-col justify-between items-center border rounded-md py-6 px-2 h-full shadow-md cursor-pointer hover:scale-105 transition-transform duration-200">
          <div className="flex flex-col items-center h-full">
            <h3 className="text-2xl font-medium opacity-85 mb-3">Basic</h3>
            <ul className="flex flex-col justify-start items-start py-3 px-2 text-base text-gray-700">
              <li className="my-1 px-3">Task Management: Create, edit, and delete tasks.</li>
              <li className="my-1 px-3">Basic Categories: Organize tasks into simple categories.</li>
              <li className="my-1 px-3">Reminders: Set reminders for tasks.</li>
              <li className="my-1 px-3">
                Sync Across Devices: Access your tasks on multiple devices.
              </li>
              <li className="my-1 px-3">Basic Support: Email support during business hours.</li>
            </ul>
          </div>
          <Link
            href="#"
            className="flex justify-center items-center bg-black opacity-95 h-12 w-32 rounded-md text-white text-opacity-90 font-medium hover:opacity-80"
          >
            Free
          </Link>
        </div>
				<div className="flex flex-col justify-between items-center border rounded-md py-6 px-2 h-full shadow-md cursor-pointer hover:scale-105 transition-transform duration-200">
          <div className="flex flex-col items-center h-full">
            <h3 className="text-2xl font-medium opacity-85 mb-3">Pro Plan</h3>
            <ul className="flex flex-col justify-start items-start py-3 px-2 text-base text-gray-700">
              <li className="my-1 px-3">Task Management: Create, edit, and delete tasks.</li>
              <li className="my-1 px-3">Basic Categories: Organize tasks into simple categories.</li>
              <li className="my-1 px-3">Reminders: Set reminders for tasks.</li>
              <li className="my-1 px-3">
                Sync Across Devices: Access your tasks on multiple devices.
              </li>
              <li className="my-1 px-3">Basic Support: Email support during business hours.</li>
            </ul>
          </div>
          <Link
            href="#"
            className="flex justify-center items-center bg-black opacity-95 h-12 w-32 rounded-md text-white text-opacity-90 font-medium hover:opacity-80 "
          >
            $4.99/month
          </Link>
        </div>
				<div className="flex flex-col justify-between items-center border rounded-md py-6 px-2 h-full shadow-md cursor-pointer hover:scale-105 transition-transform duration-200">
          <div className="flex flex-col items-center h-full">
            <h3 className="text-2xl font-medium opacity-85 mb-3">Premium Plan</h3>
            <ul className="flex flex-col justify-start items-start py-3 px-2 text-base text-gray-700">
              <li className="my-1 px-3">Task Management: Create, edit, and delete tasks.</li>
              <li className="my-1 px-3">Basic Categories: Organize tasks into simple categories.</li>
              <li className="my-1 px-3">Reminders: Set reminders for tasks.</li>
              <li className="my-1 px-3">
                Sync Across Devices: Access your tasks on multiple devices.
              </li>
              <li className="my-1 px-3">Basic Support: Email support during business hours.</li>
            </ul>
          </div>
          <Link
            href="#"
            className="flex justify-center items-center bg-black opacity-95 h-12 w-32 rounded-md text-white text-opacity-90 font-medium hover:opacity-80"
          >
            $14.99/month
          </Link>
        </div>

      </div>
    </section>
  );
}
