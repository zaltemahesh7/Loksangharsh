import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <nav className=" flex gap-1 w-full h-10 p-3 items-center">
      <ul className="flex gap-2 ">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/news">News</Link>
        </li>
        <li>
          <Link href="/news/newsdetails">NewsDetails</Link>
        </li>
        <li>
          <Link href="/news">Home</Link>
        </li>
        <li>
          <Link href="/news">Home</Link>
        </li>
        <li>
          <Link href="/news">Home</Link>
        </li>
        <li>
          <Link href="/news">Home</Link>
        </li>
        <li>
          <Link href="/news">Home</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
