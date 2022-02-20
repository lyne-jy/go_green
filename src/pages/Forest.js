import React, { useContext } from "react";

import ForestCanvas from "../components/ForestCanvas";
import { DataContext } from "..";

const Forest = () => {
  const data = useContext(DataContext);
  const trees = data.trees;

  return (
    <>
      <div className="fixed top-0 w-full -z-10">
        <ForestCanvas />
      </div>
      <div className="container mx-auto px-4 pt-2 pb-4 mt-96 bg-white shadow-lg" style={{"margin-top": "30rem"}}>
        <ul className="divide-y divide-gray-200">
          {trees.map((tree, key) => (
            <li key={key} className="py-4 flex">
              <img className="h-10 w-10 rounded-full" src={tree.image} alt="" />
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-900">
                  {tree.treeType}
                </p>
                <p className="text-sm text-gray-500">{tree.date}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Forest;
