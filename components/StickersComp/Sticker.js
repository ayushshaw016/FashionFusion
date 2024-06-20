import React from "react";
import { StickerCards } from "./StickerCard";
import { s1, s2, s3, s4, s5, s6 } from "../../Assets/Stickers/stickerimg";
const Sticker = () => {
  const stickersdata = [
    { IMG: s1, category: "Stickers", Brand: "Doms", Price: "₹45" },
    { IMG: s2, category: "Stickers", Brand: "Apsara", Price: "₹70" },
    { IMG: s3, category: "Stickers", Brand: "Classmate", Price: "₹55" },
    { IMG: s4, category: "Stickers", Brand: "Camlin", Price: "₹65" },
    { IMG: s5, category: "Stickers", Brand: "Faber-Castell", Price: "₹80" },
    { IMG: s6, category: "Stickers", Brand: "Cello", Price: "₹50" },
    { IMG: s1, category: "Stickers", Brand: "Reynolds", Price: "₹75" },
    { IMG: s2, category: "Stickers", Brand: "Nataraj", Price: "₹60" },
    { IMG: s3, category: "Stickers", Brand: "Luxor", Price: "₹85" },
    { IMG: s4, category: "Stickers", Brand: "Staedtler", Price: "₹90" },
    { IMG: s5, category: "Stickers", Brand: "Prismacolor", Price: "₹70" },
    { IMG: s6, category: "Stickers", Brand: "Paper Mate", Price: "₹55" },
    { IMG: s1, category: "Stickers", Brand: "Sharpie", Price: "₹95" },
    { IMG: s2, category: "Stickers", Brand: "Maped", Price: "₹65" },
    { IMG: s3, category: "Stickers", Brand: "Kokuyo", Price: "₹85" },
  ];
  return (
    <>
      <div className="">Sticker</div>
      <StickerCards stickersdata={stickersdata} />
    </>
  );
};

export default Sticker;
