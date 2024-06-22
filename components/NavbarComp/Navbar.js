"use client";
import React from "react";
import Logo from "../../Assets/Logo.png";
import Image from "next/image";
import Link from "next/link";
import { CiShoppingCart } from "react-icons/ci";
import { ImCross } from "react-icons/im";
import { useRef } from "react";
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";
const Navbar = () => {
  const togglecart = () => {
    if (ref.current.classList.contains("translate-x-full")) {
      ref.current.classList.remove("translate-x-full");
      ref.current.classList.add("translate-x-0");
    } else if (!ref.current.classList.contains("translate-x-full")) {
      ref.current.classList.remove("translate-x-0");
      ref.current.classList.add("translate-x-full");
    }
  };
  const ref = useRef();
  return (
    <>
      <div className="flex flex-col items-center md:flex-row md:justify-between my-1 md:my-2 shadow-xl">
        <div>
          <Link href="/">
            <Image src={Logo} className="w-12 h-12 md:w-20 md:h-20" />
          </Link>
        </div>
        <div>
          <ul className="flex flex-row">
            <Link href="/Tshirts">
              <li className="mx-1  sm:mx-2 md:mx-4 text-sm sm:text-md md:text-lg lg:text-xl font-bold">
                Tshirts
              </li>
            </Link>
            <Link href="/Hoodies">
              <li className="mx-1  sm:mx-2 md:mx-4 text-sm sm:text-md md:text-lg lg:text-xl font-bold">
                Hoodies
              </li>
            </Link>
            <Link href="/Stickers">
              <li className="mx-1  sm:mx-2 md:mx-4 text-sm sm:text-md md:text-lg lg:text-xl font-bold">
                Stickers
              </li>
            </Link>
            <Link href="/Mugs">
              <li className="mx-1  sm:mx-2 md:mx-4 text-sm sm:text-md md:text-lg lg:text-xl font-bold">
                Mugs
              </li>
            </Link>
          </ul>
        </div>
        <div className="mr-1" onClick={togglecart}>
          <CiShoppingCart className="w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 hover:cursor-pointer" />
        </div>
        {/* Creating the cart Page */}
        <div
          ref={ref}
          className="sidecart absolute top-0 right-0 bg-blue-100  transform transition-transform translate-x-full pl-4 z-50"
        >
          <h2 className="text-md md:text-xl font-bold">Shopping Cart</h2>
          <ul className="list-decimal mx-2">
            <li className="text-sm md:text-lg text-gray-500">
              <div className="flex flex-row">
                <div className="w-2/3">Wear the Fashion</div>
                <div className="w-1/3 flex">
                  <CiCircleMinus className="text-blue-600 rounded-full mt-0.5" />
                  11
                  <CiCirclePlus className="text-blue-600 mt-0.5" />
                </div>
              </div>
            </li>
            <li className="text-sm md:text-lg text-gray-500">
              <div className="flex flex-row">
                <div className="w-2/3">Wear the Fashion</div>
                <div className="w-1/3 flex">
                  <CiCircleMinus className="text-blue-600 rounded-full mt-0.5" />
                  11
                  <CiCirclePlus className="text-blue-600 mt-0.5" />
                </div>
              </div>
            </li>
            <li className="text-sm md:text-lg text-gray-500">
              <div className="flex flex-row">
                <div className="w-2/3">Wear the Fashion</div>
                <div className="w-1/3 flex">
                  <CiCircleMinus className="text-blue-600 rounded-full mt-0.5" />
                  11
                  <CiCirclePlus className="text-blue-600 mt-0.5" />
                </div>
              </div>
            </li>
            <li className="text-sm md:text-lg text-gray-500">
              <div className="flex flex-row">
                <div className="w-2/3">Wear the Fashion</div>
                <div className="w-1/3 flex">
                  <CiCircleMinus className="text-blue-600 rounded-full mt-0.5" />
                  11
                  <CiCirclePlus className="text-blue-600 mt-0.5" />
                </div>
              </div>
            </li>
            <li className="text-sm md:text-lg text-gray-500">
              <div className="flex flex-row">
                <div className="w-2/3">Wear the Fashion</div>
                <div className="w-1/3 flex">
                  <CiCircleMinus className="text-blue-600 rounded-full mt-0.5" />
                  11
                  <CiCirclePlus className="text-blue-600 mt-0.5" />
                </div>
              </div>
            </li>
            <li className="text-sm md:text-lg text-gray-500">
              <div className="flex flex-row">
                <div className="w-2/3">Wear the Fashion</div>
                <div className="w-1/3 flex">
                  <CiCircleMinus className="text-blue-600 rounded-full mt-0.5" />
                  11
                  <CiCirclePlus className="text-blue-600 mt-0.5" />
                </div>
              </div>
            </li>
          </ul>
          <div className="flex justify-between my-1">
            <button className="bg-blue-400 text-white text-sm md:text-md lg:text-xl px-2 py-1 rounded-md hover:bg-green-500">
              CheckOut
            </button>
            <button className="bg-blue-400 text-white text-sm md:text-md lg:text-xl px-2 py-1 rounded-md hover:bg-red-500 ml-1 md:ml-2">
              Clear Cart
            </button>
          </div>
          {/* Creating the X button */}
          <div className="absolute top-2 right-4" onClick={togglecart}>
            <ImCross className="hover:cursor-pointer hover:scale-110 hover:text-red-600 " />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
