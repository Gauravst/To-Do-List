import Link from "next/link";
import React from "react";

export default function NavBar() {
  return (
    <nav className="flex gap-x-8 items-center">
      <ul className="flex gap-x-6 items-center">
        <li>
          <Link className="font-medium text-sm text-gray-700" href="#">Home</Link>
        </li>
        <li>
          <Link className="font-medium text-sm text-gray-700" href="#">Pricing</Link>
        </li>
        <li>
          <Link className="font-medium text-sm text-gray-700" href="#">About</Link>
        </li>
        <li>
          <Link className="font-medium text-sm text-gray-700" href="#">Contact</Link>
        </li>
      </ul>
      <div className="bg-black h-10 px-3 flex items-center rounded-md cursor-pointer hover:bg-opacity-60">
        <Link className="text-white text-sm font-medium" href="#">DashBoard</Link>
      </div>
    </nav>
  );
}
