import React from "react";
import { h1, h2, h3, h4, h5, h6 } from "../../Assets/Hoodies/hoodiesimg";

import { HoodieCards } from "./HoodiesCard";
const Hoodies = () => {
  const hoodiesdata = [
    { IMG: h1, category: "Hoodie", Brand: "CROSS", Price: "₹600" },
    { IMG: h2, category: "Hoodie", Brand: "FORT", Price: "₹600" },
    { IMG: h3, category: "Hoodie", Brand: "ZENITH", Price: "₹600" },
    { IMG: h4, category: "Hoodie", Brand: "PEAK", Price: "₹600" },
    { IMG: h5, category: "Hoodie", Brand: "VISTA", Price: "₹600" },
    { IMG: h6, category: "Hoodie", Brand: "SUMMIT", Price: "₹600" },
    { IMG: h1, category: "Hoodie", Brand: "ALTITUDE", Price: "₹600" },
    { IMG: h2, category: "Hoodie", Brand: "NEXUS", Price: "₹600" },
    { IMG: h3, category: "Hoodie", Brand: "PINNACLE", Price: "₹600" },
    { IMG: h4, category: "Hoodie", Brand: "ELEVATE", Price: "₹600" },
    { IMG: h5, category: "Hoodie", Brand: "CREST", Price: "₹600" },
    { IMG: h6, category: "Hoodie", Brand: "PEAK", Price: "₹600" },
    { IMG: h1, category: "Hoodie", Brand: "SUMMIT", Price: "₹600" },
    { IMG: h2, category: "Hoodie", Brand: "NEXUS", Price: "₹600" },
    { IMG: h3, category: "Hoodie", Brand: "ALTITUDE", Price: "₹600" },
    { IMG: h1, category: "Hoodie", Brand: "CROSS", Price: "₹600" },
    { IMG: h2, category: "Hoodie", Brand: "FORT", Price: "₹600" },
    { IMG: h3, category: "Hoodie", Brand: "ZENITH", Price: "₹600" },
    { IMG: h4, category: "Hoodie", Brand: "PEAK", Price: "₹600" },
    { IMG: h5, category: "Hoodie", Brand: "VISTA", Price: "₹600" },
    { IMG: h6, category: "Hoodie", Brand: "SUMMIT", Price: "₹600" },
    { IMG: h1, category: "Hoodie", Brand: "ALTITUDE", Price: "₹600" },
    { IMG: h2, category: "Hoodie", Brand: "NEXUS", Price: "₹600" },
    { IMG: h3, category: "Hoodie", Brand: "PINNACLE", Price: "₹600" },
    { IMG: h4, category: "Hoodie", Brand: "ELEVATE", Price: "₹600" },
    { IMG: h5, category: "Hoodie", Brand: "CREST", Price: "₹600" },
    { IMG: h6, category: "Hoodie", Brand: "PEAK", Price: "₹600" },
    { IMG: h1, category: "Hoodie", Brand: "SUMMIT", Price: "₹600" },
    { IMG: h2, category: "Hoodie", Brand: "NEXUS", Price: "₹600" },
    { IMG: h3, category: "Hoodie", Brand: "ALTITUDE", Price: "₹600" },
  ];
  return (
    <>
      <div className="bg-slate-50 my-12">
        <HoodieCards hoodiesdata={hoodiesdata} />
      </div>
    </>
  );
};

export default Hoodies;
