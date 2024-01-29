"use client";
import Link from "next/link";
import React from "react";
import { FaSync } from "react-icons/fa";
import { TiTick } from "react-icons/ti";
import { CiFilter } from "react-icons/ci";

export default function Dash() {
  return (
    <div className="w-full h-full relative z-0 py-10">
      <div className="flex items-center px-10 justify-between">
				<div className="bg-gray-900 h-11 px-4 flex justify-center items-center font-medium text-base text-white rounded-md cursor-pointer">Create</div>
				<div className="bg-gray-200 h-11 px-4 flex justify-center items-center font-semibold text-2xl rounded-md cursor-pointer"><CiFilter/></div>
			</div>
      <div className="w-full px-10 mt-8">
				<h1 className="mt-5 text-sm font-medium px-2 py-2 rounded text-black bg-blue-100 w-fit cursor-pointer">Pending</h1>
        <table className="w-full">
          <thead>
            <tr className="border-b my-1 px-4 h-[8vh]">
              <th className="text-center">
                <input type="checkbox" />
              </th>
              <th className="text-center px-4 font-medium text-base">S.No</th>
              <th className="text-left font-medium text-base">Title</th>
              <th className="text-center font-medium text-base">Due Date</th>
              <th className="text-center font-medium text-base">Priority</th>
              <th className="text-center font-medium text-base">Sync</th>
            </tr>
          </thead>
          <tbody>
            {[...Array(6)].map((_, index) => (
              <tr key={index} className="border-b my-1 px-4 h-[8vh]">
                <td className="text-center">
                  <input type="checkbox" />
                </td>
                <td className="text-center px-4 text-base font-normal text-gray-700">{index + 1}</td>
                <td className="text-left hover:underline cursor-pointer text-base font-normal text-gray-700">Do home work & coding, making..</td>
                <td className="text-center text-base font-normal text-gray-700">02/02</td>
                <td className="text-center text-base font-normal text-gray-700">High</td>
                <td className="flex justify-center items-center h-[8vh] cursor-pointer font-light">
                  <FaSync />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
