import React from "react";
import { t1, t2, t3, t4, t5, t6 } from "../../Assets/Tshirts/tshirtspic";
import { TshirtCards } from "./Tshirtcard";
const Tshirts = () => {
  const tshirtdata = [
    { IMG: t1, category: "T-Shirts", Brand: "COBBS", Price: "₹600" },
    { IMG: t2, category: "T-Shirts", Brand: "Peter England", Price: "₹450" },
    { IMG: t3, category: "T-Shirts", Brand: "U.S. Polo", Price: "₹800" },
    { IMG: t4, category: "T-Shirts", Brand: "COBBS", Price: "₹950" },
    { IMG: t5, category: "T-Shirts", Brand: "Peter England", Price: "₹700" },
    { IMG: t6, category: "T-Shirts", Brand: "U.S. Polo", Price: "₹1050" },
    { IMG: t1, category: "T-Shirts", Brand: "COBBS", Price: "₹500" },
    { IMG: t2, category: "T-Shirts", Brand: "Peter England", Price: "₹400" },
    { IMG: t3, category: "T-Shirts", Brand: "U.S. Polo", Price: "₹1100" },
    { IMG: t4, category: "T-Shirts", Brand: "COBBS", Price: "₹480" },
    { IMG: t5, category: "T-Shirts", Brand: "Peter England", Price: "₹650" },
    { IMG: t6, category: "T-Shirts", Brand: "U.S. Polo", Price: "₹900" },
    { IMG: t1, category: "T-Shirts", Brand: "COBBS", Price: "₹550" },
    { IMG: t2, category: "T-Shirts", Brand: "Peter England", Price: "₹750" },
    { IMG: t3, category: "T-Shirts", Brand: "U.S. Polo", Price: "₹820" },
    { IMG: t4, category: "T-Shirts", Brand: "COBBS", Price: "₹980" },
    { IMG: t1, category: "T-Shirts", Brand: "COBBS", Price: "₹600" },
    { IMG: t2, category: "T-Shirts", Brand: "Peter England", Price: "₹450" },
    { IMG: t3, category: "T-Shirts", Brand: "U.S. Polo", Price: "₹800" },
    { IMG: t4, category: "T-Shirts", Brand: "COBBS", Price: "₹950" },
    { IMG: t5, category: "T-Shirts", Brand: "Peter England", Price: "₹700" },
    { IMG: t6, category: "T-Shirts", Brand: "U.S. Polo", Price: "₹1050" },
    { IMG: t1, category: "T-Shirts", Brand: "COBBS", Price: "₹500" },
    { IMG: t2, category: "T-Shirts", Brand: "Peter England", Price: "₹400" },
    { IMG: t3, category: "T-Shirts", Brand: "U.S. Polo", Price: "₹1100" },
    { IMG: t4, category: "T-Shirts", Brand: "COBBS", Price: "₹480" },
    { IMG: t5, category: "T-Shirts", Brand: "Peter England", Price: "₹650" },
    { IMG: t6, category: "T-Shirts", Brand: "U.S. Polo", Price: "₹900" },
    { IMG: t1, category: "T-Shirts", Brand: "COBBS", Price: "₹550" },
    { IMG: t2, category: "T-Shirts", Brand: "Peter England", Price: "₹750" },
    { IMG: t3, category: "T-Shirts", Brand: "U.S. Polo", Price: "₹820" },
    { IMG: t4, category: "T-Shirts", Brand: "COBBS", Price: "₹980" },
  ];

  return (
    <>
      <div className="bg-slate-50 my-12">
        {/* <p>T-shirts</p> */}
        <TshirtCards tshirtdata={tshirtdata} />
      </div>
    </>
  );
};

export default Tshirts;
