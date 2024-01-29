import Image from "next/image";
import Link from "next/link";
import { useSession } from "next-auth/next";

export default function Home() {
  return (
    <>
      <div className="flex flex-col px-40 justify-center items-center h-[90vh]">
        <div className="flex flex-col justify-center items-center">
          <h1 className="font-extrabold text-6xl my-2 text-gray-950 text-center">
            Stay on Track, Anytime, Anywhere!
          </h1>
          <p className="text-center text-lg my-3 px-6 text-gray-600">
            Maximize efficiency with our streamlined to-do app. Prioritize
            tasks, set reminders, and achieve your goals effortlessly.
            Synchronize seamlessly across devices for uninterrupted
            productivity. Take control of your day and conquer
            your to-do list!
          </p>
        </div>
        <div className="flex gap-x-8">
          <div className="bg-gray-950 h-12 mt-5 w-fit px-4 flex items-center rounded-md cursor-pointer border border-gray-950 transition duration-500 hover:bg-opacity-60 hover:border-opacity-20">
            <Link className="text-white text-sm font-medium" href="#">
              Get Started
            </Link>
          </div>
          <div className="bg-transparent h-12 mt-5 w-fit px-4 flex items-center rounded-md cursor-pointer transition duration-500 hover:bg-gray-200 border border-gray-400">
            <Link className="text-gray-950 text-sm font-medium" href="/">
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
