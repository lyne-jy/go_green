import React from "react";

import ForestCanvas from "../components/ForestCanvas";

const trees = [
  {
    treeId: 1,
    treeType: "Cone Tree",
    image: "../obj/tree_cone.png",
    dateMsg: "Planted at 2022-02-19 15:30",
  },
  {
    treeId: 2,
    treeType: "Palm Tree",
    image: "../obj/tree_palmDetailedTall.png",
    dateMsg: "Planted at 2022-02-19 17:50",
  },
  {
    treeId: 3,
    treeType: "Pine Tree",
    image: "../obj/tree_pineRoundC.png",
    dateMsg: "Planted at 2022-02-19 17:50",
  },
];

const Forest = () => {
  return (
    <>
      <ForestCanvas />
      <div className="container mx-auto px-4">
        <ul className="divide-y divide-gray-200">
          {trees.map((tree) => (
            <li key={tree.treeId} className="py-4 flex">
              <img className="h-10 w-10 rounded-full" src={tree.image} alt="" />
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-900">
                  {tree.treeType}
                </p>
                <p className="text-sm text-gray-500">{tree.dateMsg}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Forest;
