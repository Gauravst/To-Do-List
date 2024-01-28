import Image from "next/image";
import React from "react";
import NavBar from "./NavBar";

export default function Header() {
  return (
    <>
      <header className="flex justify-between px-20 border-b sticky top-0 h-[10vh]">
        <div className="flex items-center">
          <Image src="/icon.svg" width="40" height="40" />
          <h2 className="mx-3 text-xl font-bold">To Do</h2>
        </div>
        <NavBar />
      </header>
    </>
  );
}
