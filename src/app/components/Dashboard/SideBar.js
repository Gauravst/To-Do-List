import Link from "next/link";
import React from "react";

import { MdDashboard } from "react-icons/md";
import { PiListDashesFill } from "react-icons/pi";
import { IoMdCreate, IoIosNotifications, IoMdSettings } from "react-icons/io";

export default function SideBar() {
  return (
    <div className="flex flex-col border-r w-[20vw]">
      <ul className="flex flex-col py-3 px-2 gap-y-2">
        <li>
          <Link
            className="flex items-center py-4 px-4 gap-x-4 text-lg bg-blue-100 rounded-md"
            href="/"
          >
            <MdDashboard /> <p className="text-base text-gray-800 font-medium">DashBoard</p>
          </Link>
        </li>
        <li>
          <Link
            className="flex items-center py-4 px-4 gap-x-4 text-lg hover:bg-blue-100 rounded-md"
            href="/"
          >
            <IoMdCreate /> <p className="text-base text-gray-800 font-normal">New To-Do</p>
          </Link>
        </li>
        <li>
          <Link
            className="flex items-center py-4 px-4 gap-x-4 text-lg hover:bg-blue-100 rounded-md"
            href="/"
          >
            <IoIosNotifications /> <p className="text-base text-gray-800 font-normal">Notifications</p>
          </Link>
        </li>
        <li>
          <Link
            className="flex items-center py-4 px-4 gap-x-4 text-lg hover:bg-blue-100 rounded-md"
            href="/"
          >
            <PiListDashesFill /> <p className="text-base text-gray-800 font-normal">Categories</p>
          </Link>
        </li>
        <li>
          <Link
            className="flex items-center py-4 px-4 gap-x-4 text-lg hover:bg-blue-100 rounded-md"
            href="/"
          >
            <IoMdSettings /> <p className="text-base text-gray-800 font-normal">Settings</p>
          </Link>
        </li>
      </ul>
    </div>
  );
}
