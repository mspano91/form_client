import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="bg-white p-4">
      <ul className="flex space-x-4">
        <li>
          <Link href="/auth/register">
            <h1 className="text-black px-4 py-2 hover:bg-gray-200 transition duration-300 ease-in-out">
              Login
            </h1>
          </Link>
        </li>
        <li>
          <Link href="/">
            {" "}
            <h1 className="text-black px-4 py-2 hover:bg-gray-200 transition duration-300 ease-in-out">
              Home
            </h1>
          </Link>
        </li>
      </ul>
    </div>
  );
}
