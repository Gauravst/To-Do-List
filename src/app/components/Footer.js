import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  FaSquareGithub,
  FaSquareXTwitter,
  FaLinkedin,
  FaSquareFacebook,
} from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-black opacity-95 py-7">
      <div className="text-white flex flex-col justify-center items-center text-opacity-90">
        <h4 className="text-2xl font-semibold flex justify-center items-center my-3">
          <Image
            className="filter invert mr-1"
            src="/icon.svg"
            width="30"
            height="30"
						alt="logo"
          />
          To Do
        </h4>
        <h5 className="text-base font-light text-center w-[50vw] my-3">
          Stay on Track, Anytime, Anywhere! Prioritize tasks, set reminders, and
          achieve your goals effortlessly. Synchronize seamlessly across devices
          for uninterrupted productivity.
        </h5>
        <div className="flex text-3xl gap-x-4 mt-9">
          <Link href="/">
            <FaLinkedin />
          </Link>
          <Link href="/">
            <FaSquareXTwitter />
          </Link>
          <Link href="/">
            <FaSquareGithub />
          </Link>
          <Link href="/">
            <FaSquareFacebook />
          </Link>
        </div>
        <div className="flex">
          <h6 className="mt-5 text-opacity-60">
            © 2024 To Do. All Rights Reserved. Made in &#x1F1EE;&#x1F1F3; with
            Next.js & Love
          </h6>
        </div>
      </div>
    </footer>
  );
}
