"use client";
import Link from "next/link";
import React, { useState } from "react";

export default function RegisterForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !pass) {
      setError("value not found");
    }

    try {
      const res = await fetch("api/register", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          pass,
        }),
      });

      if (res.ok) {
        const form = e.target;
        form.reset();
      } else {
        console.log("User registrations failed.");
      }
    } catch (error) {
      console.log("Error during registrations.", error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full flex flex-col justify-center items-center my-10"
    >
      <h2 className="text-3xl text-gray-800 font-bold w-1/3 mb-4 mt-1 text-left">
        Create Your Account
      </h2>
      <div className="flex flex-col my-3 w-1/3">
        <label htmlFor="name" className="text-sm text-gray-800">
          Name
        </label>
        <input
          className="bg-gray-100 h-12 rounded-md px-3 text-sm my-2"
          placeholder="username"
          id="name"
          name="name"
          type="text"
					autoComplete="off"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
      </div>
      <div className="flex flex-col my-3 w-1/3">
        <label htmlFor="name" className="text-sm text-gray-800">
          Email
        </label>
        <input
          className="bg-gray-100 h-12 rounded-md px-3 text-sm my-2"
          placeholder="username@gmail.com"
          id="email"
          name="email"
          type="email"
					autoComplete="off"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
      </div>
      <div className="flex flex-col my-3 w-1/3">
        <label htmlFor="name" className="text-sm text-gray-800">
          Password
        </label>
        <input
          className="bg-gray-100 h-12 rounded-md px-3 text-sm my-2"
          placeholder="*****"
          id="pass"
          name="pass"
          type="password"
					autoComplete="current-password"
          onChange={(e) => {
            setPass(e.target.value);
          }}
        />
      </div>
      <div className="mt-3 text-gray-700 text-sm flex w-1/3">
        <input type="checkbox" className="mr-2" />
        <label htmlFor="trem">I accept the Terms and Conditions</label>
      </div>
      <button
        className="bg-gray-950 py-3 px-4 mt-3 rounded-md text-base text-white font-semibold w-1/3"
        type="sumbit"
      >
        Register
      </button>
      <div className="mt-3 text-gray-700 text-sm flex">
        <h2>Already have an account?</h2>
        <Link
          className="hover:underline font-medium text-gray-700"
          href="/login"
        >
          <h2>&nbsp;Sign In</h2>
        </Link>
      </div>
    </form>
  );
}
