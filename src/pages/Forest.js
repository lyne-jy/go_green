import React from "react";

import ForestCanvas from "../components/ForestCanvas";
// import TreeCone from "../objects/TreeCone"
// import TreePalmDetailedTall from "../objects/TreePalmDetailedTall"
// import TreePineRoundC from "../objects/TreePineRoundC"

const trees = [
  {
    treeId: 1,
    treeType: "Cone Tree",
    image: "../obj/tree_cone.png",
    tree: "TreeCone",
    dateMsg: "Planted at 2022-02-19 15:30",
  },
  {
    treeId: 2,
    treeType: "Palm Tree",
    image: "../obj/tree_palmDetailedTall.png",
    tree: "TreePalmDetailedTall",
    dateMsg: "Planted at 2022-02-19 17:50",
  },
  {
    treeId: 3,
    treeType: "Pine Tree",
    image: "../obj/tree_pineRoundC.png",
    tree: "TreePineRoundC",
    dateMsg: "Planted at 2022-02-19 17:50",
  },
  {
    treeId: 3,
    treeType: "Pine Tree",
    image: "../obj/tree_pineRoundC.png",
    tree: "TreePineRoundC",
    dateMsg: "Planted at 2022-02-19 17:50",
  },
  {
    treeId: 3,
    treeType: "Pine Tree",
    image: "../obj/tree_pineRoundC.png",
    tree: "TreePineRoundC",
    dateMsg: "Planted at 2022-02-19 17:50",
  },
  {
    treeId: 3,
    treeType: "Pine Tree",
    image: "../obj/tree_pineRoundC.png",
    tree: "TreePineRoundC",
    dateMsg: "Planted at 2022-02-19 17:50",
  },
  {
    treeId: 3,
    treeType: "Pine Tree",
    image: "../obj/tree_pineRoundC.png",
    tree: "TreePineRoundC",
    dateMsg: "Planted at 2022-02-19 17:50",
  },
  {
    treeId: 3,
    treeType: "Pine Tree",
    image: "../obj/tree_pineRoundC.png",
    tree: "TreePineRoundC",
    dateMsg: "Planted at 2022-02-19 17:50",
  },
  {
    treeId: 3,
    treeType: "Pine Tree",
    image: "../obj/tree_pineRoundC.png",
    tree: "TreePineRoundC",
    dateMsg: "Planted at 2022-02-19 17:50",
  },
  {
    treeId: 3,
    treeType: "Pine Tree",
    image: "../obj/tree_pineRoundC.png",
    tree: "TreePineRoundC",
    dateMsg: "Planted at 2022-02-19 17:50",
  },
];

const Forest = () => {
  return (
    <>
      <div className="fixed top-0 w-full -z-10">
        <ForestCanvas trees={trees} />
      </div>
      <div className="container mx-auto px-4 pt-2 mt-96 bg-white shadow-lg">
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
