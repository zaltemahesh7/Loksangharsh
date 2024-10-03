import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <nav className=" flex gap-1 w-full h-10 items-center">
      <ul className="flex gap-2 ">
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
