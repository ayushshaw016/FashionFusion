import Image from "next/image";
import React from "react";
import t5 from "../../../Assets/Tshirts/t5.png";

const slug = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center w-[60vw] mx-auto border border-solid border-gray-300 my-8 md:my-12 p-4 md:p-8">
        <div>
          <Image src={t5} />
        </div>
        <div className="text-center">
          <p className="text-sm md:text-md lg:text-lg text-gray-400">
            Brand Name
          </p>
          <p className="text-md sm:text-lg md:text-xl">Add your Tag Line</p>
          <p>
            <span className="inline-block mx-3">
              <Image src={t5} className="w-4 h-4 md:w-6 md:h-6 rounded-full" />
            </span>
            <span className="inline-block mx-3">
              <Image src={t5} className="w-4 h-4 md:w-6 md:h-6 rounded-full" />
            </span>
            <span className="inline-block mx-3">
              <Image src={t5} className="w-4 h-4 md:w-6 md:h-6 rounded-full" />
            </span>
          </p>
          <p className="text-sm sm:text-md md:text-lg text-gray-400">
            Our premium wireless earbuds deliver crystal-clear sound and
            exceptional noise cancellation for an immersive audio experience.
            With a sleek design and ergonomic fit, they ensure comfort for long
            hours of use. Featuring an extended battery life, these earbuds are
            perfect for music lovers and professionals on the go.
          </p>
          <span className="mr-6 md:mr-12">
            <span className="text-sm md:text-md mr-2">Price:</span>
            <span className="text-sm md:text-md font-bold">3</span>
          </span>
          <span className="text-sm md:text-md mx-2">Size</span>
          <select className="text-sm md:text-md" name="size">
            <option className="text-sm md:text-md " value="S">
              S
            </option>
            <option className="text-sm md:text-md" value="M">
              M
            </option>
            <option className="text-sm md:text-md" value="L">
              L
            </option>
            <option className="text-sm md:text-md" value="XL">
              XL
            </option>
          </select>

          <div>
            <button className="text-sm md:text-md bg-blue-400 px-1 py-0.5 md:px-2 md:py-1 rounded-md text-white hover:bg-green-500 mx-2 md:mx-6">
              CheckOut
            </button>
            <button className="text-sm md:text-md bg-blue-400 px-1 py-0.5 md:px-2 md:py-1 rounded-md text-white hover:bg-blue-600 mx-2 md:mx-6">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default slug;
