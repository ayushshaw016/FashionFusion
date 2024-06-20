import React from "react";
import { MugsCards } from "./MugsCard";
import { m1, m2, m3, m4, m5, m6 } from "../../Assets/Mugs/mugsimg";
const Mugs = () => {
  const mugsdata = [
    { IMG: m1, category: "Mugs", Brand: "FreshMart", Price: "₹150" },
    { IMG: m2, category: "Mugs", Brand: "GreenLeaf", Price: "₹200" },
    { IMG: m3, category: "Mugs", Brand: "EcoGrocers", Price: "₹250" },
    { IMG: m4, category: "Mugs", Brand: "HealthyHarvest", Price: "₹300" },
    { IMG: m5, category: "Mugs", Brand: "PureFoods", Price: "₹350" },
    { IMG: m6, category: "Mugs", Brand: "Nature'sBest", Price: "₹120" },
    { IMG: m1, category: "Mugs", Brand: "OrganicRoots", Price: "₹180" },
    { IMG: m2, category: "Mugs", Brand: "FarmFresh", Price: "₹220" },
    { IMG: m3, category: "Mugs", Brand: "NaturalChoice", Price: "₹270" },
    { IMG: m4, category: "Mugs", Brand: "GreenEarth", Price: "₹320" },
    { IMG: m5, category: "Mugs", Brand: "HealthyLife", Price: "₹130" },
    { IMG: m6, category: "Mugs", Brand: "PureHarvest", Price: "₹170" },
    { IMG: m1, category: "Mugs", Brand: "EcoPure", Price: "₹210" },
    { IMG: m2, category: "Mugs", Brand: "FreshChoice", Price: "₹260" },
    { IMG: m3, category: "Mugs", Brand: "Nature'sHarvest", Price: "₹310" },
  ];

  return (
    <>
      <div>Mugs</div>
      <MugsCards mugsdata={mugsdata} />
    </>
  );
};

export default Mugs;
