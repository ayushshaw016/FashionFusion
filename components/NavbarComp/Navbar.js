import React from "react";
import Logo from "../../Assets/Logo.png";
import Image from "next/image";
import Link from "next/link";
import { CiShoppingCart } from "react-icons/ci";
const Navbar = () => {
  return (
    <>
      <div className="flex flex-col items-center md:flex-row md:justify-between my-1 md:my-2">
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
            <Link href="/">
              <li className="mx-1  sm:mx-2 md:mx-4 text-sm sm:text-md md:text-lg lg:text-xl font-bold">
                Home
              </li>
            </Link>
            <Link href="/">
              <li className="mx-1  sm:mx-2 md:mx-4 text-sm sm:text-md md:text-lg lg:text-xl font-bold">
                Home
              </li>
            </Link>
          </ul>
        </div>
        <div className="mr-1">
          <CiShoppingCart className="w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-10 lg:h-10" />
        </div>
      </div>
    </>
  );
};

export default Navbar;
