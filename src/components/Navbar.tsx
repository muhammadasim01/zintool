// src/components/Navbar.tsx
import React from "react";
import Link from "next/link";
import { IoMdSearch, IoMdMenu } from "react-icons/io";
import { FaGear } from "react-icons/fa6";

const Navbar = ({
  setOpen,
}: {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <div className="flex items-center justify-between space-x-1 w-full px-6 py-3 bg-white shadow-md sticky right-0 left-0 top-0 z-40">
      <Link href="/" className="flex items-center text-blue-600">
        <FaGear />
        <span className="font-bold ml-3 text-sm md:text-xl">ZinTools</span>
      </Link>
      <div className="relative hidden md:block">
        <input
          type="text"
          className="h-10 w-[450px] pr-8 pl-5 rounded-[20px] bg-gray-100"
          placeholder="Search for Movies, TV Shows, Themes & Cast"
        />
        <div className="absolute top-[6px] right-2">
          <IoMdSearch className="text-[28px]" />
        </div>
      </div>
      <div className="flex items-center">
        <Link
          href="/login"
          className="px-3 py-2 rounded-[20px] text-gray-700 hover:bg-gray-100"
        >
          Log in
        </Link>
        <Link
          href="/signup"
          className="px-3 py-2 rounded-[20px] text-white bg-blue-600 hover:bg-blue-700"
        >
          Sign up
        </Link>
        <IoMdMenu
          className="md:hidden ml-2 text-[22px]"
          onClick={() => {
            setOpen((open) => {
              return !open;
            });
          }}
        />
      </div>
    </div>
  );
};

export default Navbar;
