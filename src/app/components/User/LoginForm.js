"use client";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function LoginForm() {
  const router = useRouter();
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleOnChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setData((pre) => ({
      ...pre,
      [name]: value,
    }));
  };

  const handleOnChecked = (e) => {
    if (e.target.checked) {
      setCheck(true);
    } else {
      setCheck(false);
    }
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    signIn("credentials", {
      ...data,
      redirect: false,
    }).then((callback) => {
      if (callback?.error) {
      }

      if (callback?.ok && !callback?.error) {
        router.push("/dashboard");
      }
    });
  };

  return (
    <form
      onSubmit={handleOnSubmit}
      className="w-full flex flex-col justify-center items-center my-10"
      method="POST"
    >
      <h2 className="text-3xl text-gray-800 font-bold w-1/3 mb-4 mt-1 text-left">
        Login Your Account
      </h2>
      <div className="flex flex-col my-3 w-1/3">
        <label htmlFor="email" className="text-sm text-gray-800">
          Email
        </label>
        <input
          className="bg-gray-100 h-12 rounded-md px-3 text-sm my-2"
          placeholder="username@gmail.com"
          id="email"
          name="email"
          type="email"
          value={data.email}
          onChange={handleOnChange}
        />
      </div>
      <div className="flex flex-col my-3 w-1/3">
        <label htmlFor="password" className="text-sm text-gray-800">
          Password
        </label>
        <input
          className="bg-gray-100 h-12 rounded-md px-3 text-sm my-2"
          placeholder="*****"
          id="password"
          name="password"
          type="password"
          value={data.password}
          onChange={handleOnChange}
        />
      </div>
      <div className="mt-3 text-gray-700 text-sm flex w-1/3">
        <input type="checkbox" name="trems" className="mr-2" />
        <label htmlFor="trems">I accept the Terms and Conditions</label>
      </div>
      <button
        className="bg-gray-950 py-3 px-4 mt-3 rounded-md text-base text-white font-semibold w-1/3"
        type="submit"
      >
        Login
      </button>
      <div className="mt-3 text-gray-700 text-sm flex">
        <h2>Create new account.</h2>
        <Link
          className="hover:underline font-medium text-gray-700"
          href="/register"
        >
          <h2>&nbsp;Register here.</h2>
        </Link>
      </div>
    </form>
  );
}
