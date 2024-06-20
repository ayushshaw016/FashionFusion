import Link from "next/link";

const { default: Image } = require("next/image");

const MugsCards = ({ mugsdata }) => {
  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
        {mugsdata.map((data, index) => (
          <div
            key={index}
            className="border border-solid border-gray-200 mx-1 sm:mx-2 md:mx-6 mt-2 md:mt-4 hover:shadow-lg hover:cursor-pointer hover:bg-white rounded-md hover:scale-105"
          >
            <Link href="/Products/fashion-fusion">
              <Image src={data.IMG} className="w-full h-[35vh] md:h-[40vh]" />
              <div className="ml-2 text-center sm:text-left">
                <p className="text-bold text-sm sm:text-md md:text-lg">
                  {data.category}
                </p>
                <p className="text-gray-500 text-xs sm:text-sm md:text-md">
                  {data.Brand}
                </p>
                <p className="text-gray-400 text-xs sm:text-sm md:text-md">
                  {data.Price}
                </p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export { MugsCards };
