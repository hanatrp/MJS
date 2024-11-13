"use client";
import React from "react";
import Wrapper from "./Wrapper";
import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  return (
    <Wrapper>
      <div className="flex flex-row items-center justify-between gap-2 md:gap-0">
        <div>
          <Link href="/" className="p-4">
            <Image
              src="https://mjsolution.co.id/wp-content/uploads/2022/10/cropped-logo_transparent-50x47.png"
              alt={"logo"}
              width={50}
              height={47}
            />
          </Link>
        </div>
        <div className="md:hidden p-4">
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Menu className="text-hijau" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Home</DropdownMenuItem>
              <DropdownMenuItem>About Us</DropdownMenuItem>
              <DropdownMenuItem>Product</DropdownMenuItem>
              <DropdownMenuItem>Solution</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        {/* right side */}
        <div className="hidden md:flex justify-between items-center md:gap-36 xl:gap-72">
          {/* list link */}
          <div className="flex justify-between gap-8">
            <ul className="text-hijau flex justify-between gap-6 m-2">
              <li className="hover:text-black hover:underline">
                <Link href="/home" className="my-4">
                  Home
                </Link>
              </li>
              <li className="hover:text-black hover:underline">
                <Link href="/about-us">About Us</Link>
              </li>
              <li className="hover:text-black hover:underline">
                <Link href="/product">Product</Link>
              </li>
              <li className="hover:text-black hover:underline">
                <Link href="/solution">Solution</Link>
              </li>
            </ul>
          </div>
          {/* contact */}
          <button className=" border px-10 py-2 my-1 rounded-md bg-hijau text-white hover:bg-black">
            <Link href="/contact-us">Contact Us</Link>
          </button>
        </div>
      </div>
    </Wrapper>
  );
};

export default Navbar;
