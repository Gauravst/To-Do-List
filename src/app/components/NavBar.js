"use client";
import Link from "next/link";
import React from "react";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

export default function NavBar() {
  const session = useSession();
  const [user, setUser] = useState(false);

  useEffect(() => {
    if (session?.status === "authenticated") {
      setUser(true);
    } else {
      setUser(false);
    }
  }, [session?.status]);
  return (
    <nav className="flex gap-x-8 items-center">
      <ul className="flex gap-x-6 items-center">
        <li>
          <Link className="font-medium text-sm text-gray-700" href="/#home">
            Home
          </Link>
        </li>
        <li>
          <Link className="font-medium text-sm text-gray-700" href="/#pricing">
            Pricing
          </Link>
        </li>
        <li>
          <Link className="font-medium text-sm text-gray-700" href="#about">
            About
          </Link>
        </li>
        <li>
          <Link className="font-medium text-sm text-gray-700" href="/#contact">
            Contact
          </Link>
        </li>
      </ul>
      <div className="bg-black h-10 px-3 flex items-center rounded-md cursor-pointer hover:bg-opacity-60">
        <Link
          className="text-white text-sm font-medium"
          href={user ? "/dashboard" : "/login"}
        >
          {user ? "Dashboard" : "Get Started"}
        </Link>
      </div>
    </nav>
  );
}
