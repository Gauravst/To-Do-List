import Image from "next/image";
import React from "react";
import NavBar from "./NavBar";

export default function Header() {
  return (
    <>
      <header className="flex justify-between px-10 border-b fixed w-full top-0 z-10 h-[10vh] bg-white bg-opacity-50 backdrop-blur">
        <div className="flex items-center">
          <Image src="/icon.svg" width="40" height="40" alt="logo" />
          <h2 className="mx-3 text-xl font-bold">To Do</h2>
        </div>
        <NavBar />
      </header>
    </>
  );
}
