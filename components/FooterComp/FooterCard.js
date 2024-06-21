const { default: Image } = require("next/image");

const FooterCard = ({ footerdata }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 mt-3 md:mt-6">
      {footerdata.map((data, index) => (
        <div
          key={index}
          className="mt-1 sm:mt-2 md:mt-0 mx-2 border border-solid border-gray-200 px-3 md:px-6 py-2 md:my-4 hover:cursor-pointer hover:shadow-md"
        >
          <Image src={data.img} className="w-8 h-8" />
          <p className="text-sm sm:text-md md:text-lg font-bold py-1 md:py-2">
            {data.heading}
          </p>
          <p className="text-xs sm:text-sm md:text-md py-1 md:py-2">
            {data.content}
          </p>
        </div>
      ))}
    </div>
  );
};

export { FooterCard };
