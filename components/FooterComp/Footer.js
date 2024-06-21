import React from "react";
import logo from "../../Assets/Logo.png";
import { FooterCard } from "./FooterCard";
import Image from "next/image";
import Link from "next/link";
const Footer = () => {
  const footerdata = [
    {
      img: logo,
      heading: "Shooting Stars",
      content:
        "At FashionFusion, we believe fashion is more than just clothing",
    },
    {
      img: logo,
      heading: "Shooting Stars",
      content:
        "At FashionFusion, we believe fashion is more than just clothing",
    },
    {
      img: logo,
      heading: "Shooting Stars",
      content:
        "At FashionFusion, we believe fashion is more than just clothing",
    },
    {
      img: logo,
      heading: "Shooting Stars",
      content:
        "At FashionFusion, we believe fashion is more than just clothing",
    },
    {
      img: logo,
      heading: "Shooting Stars",
      content:
        "At FashionFusion, we believe fashion is more than just clothing",
    },
    {
      img: logo,
      heading: "Shooting Stars",
      content:
        "At FashionFusion, we believe fashion is more than just clothing",
    },
  ];
  return (
    <>
      <div className="mt-3 md:mt-6 border-t-2 border-solid border-gray-400 rounded-md mx-2 md:mx-4 shadow-lg">
        <div className="text-center mt-2 md:mt-6">
          <p className="text-md sm:text-lg md:text-xl lg:text-3xl font-bold">
            Fusion of Elegance and Trend
          </p>
          <p className="text-xs md:text-sm lg:text-md">
            <span className="font-bold">Exclusive Collections:</span> Apparel
            made with attention to detail..
          </p>
          <p className="text-xs md:text-sm lg:text-md">
            <span className="font-bold">Sustainable Fashion:</span> Eco-friendly
            choices for a better tomorrow.
          </p>
          <p className="text-xs md:text-sm lg:text-md">
            <span className="font-bold">Exclusive Collections:</span> Handpicked
            styles that set you apart.
          </p>
          <p className="text-xs md:text-sm lg:text-md">
            <span className="font-bold">Exceptional Service:</span> Personalized
            shopping experience.
          </p>
        </div>

        <div>
          <FooterCard footerdata={footerdata} />
        </div>
        <div className="mx-2 my-4  md:my-8 flex flex-col md:flex-row justify-between">
          <div className="">
            <Link href="/">
              <Image src={logo} className="w-14 h-14" />
            </Link>
            <p className="text-wrap text-sm md:text-md">
              At FashionFusion, we believe fashion is more than just clothing
            </p>
          </div>
          <div className="mx-1 my-2 md:mt-0">
            <p className="text-md md:text-lg font-bold">Categories</p>
            <p className="text-sm md:text-md hover:cursor-pointer hover:underline">
              First Line
            </p>
            <p className="text-sm md:text-md hover:cursor-pointer hover:underline">
              Seocnd Line
            </p>
            <p className="text-sm md:text-md hover:cursor-pointer hover:underline">
              Third Line
            </p>
            <p className="text-sm md:text-md hover:cursor-pointer hover:underline">
              Fourth Line
            </p>
          </div>
          <div className="mx-1 my-2 md:mt-0">
            <p className="text-md md:text-lg font-bold">Categories</p>
            <p className="text-sm md:text-md hover:cursor-pointer hover:underline">
              First Line
            </p>
            <p className="text-sm md:text-md hover:cursor-pointer hover:underline">
              Seocnd Line
            </p>
            <p className="text-sm md:text-md hover:cursor-pointer hover:underline">
              Third Line
            </p>
            <p className="text-sm md:text-md hover:cursor-pointer hover:underline">
              Fourth Line
            </p>
          </div>
          <div className="mx-1 my-2 md:mt-0">
            <p className="text-md md:text-lg font-bold">Categories</p>
            <p className="text-sm md:text-md hover:cursor-pointer hover:underline">
              First Line
            </p>
            <p className="text-sm md:text-md hover:cursor-pointer hover:underline">
              Seocnd Line
            </p>
            <p className="text-sm md:text-md hover:cursor-pointer hover:underline">
              Third Line
            </p>
            <p className="text-sm md:text-md hover:cursor-pointer hover:underline">
              Fourth Line
            </p>
          </div>
          <div className="mx-1 my-2 md:mt-0">
            <p className="text-md md:text-lg font-bold">Categories</p>
            <p className="text-sm md:text-md hover:cursor-pointer hover:underline">
              First Line
            </p>
            <p className="text-sm md:text-md hover:cursor-pointer hover:underline">
              Seocnd Line
            </p>
            <p className="text-sm md:text-md hover:cursor-pointer hover:underline">
              Third Line
            </p>
            <p className="text-sm md:text-md hover:cursor-pointer hover:underline">
              Fourth Line
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
