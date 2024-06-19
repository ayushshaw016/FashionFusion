import React from "react";
import Navbar from "../NavbarComp/Navbar";
import Footer from "../FooterComp/Footer";
import Image from "next/image";
import background from "../../Assets/background.png";
const Homepage = () => {
  return (
    <>
      <Navbar />
      <div>
        <Image src={background} className="h-[80vh]" />
      </div>
      <Footer />
    </>
  );
};

export default Homepage;
