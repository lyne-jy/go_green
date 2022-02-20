import React from 'react'
// import Navbar from "./components/nav";
// import TreeTable from "../components/treeTable";
// import TreeList from "../components/treeList";

const trees = [
    {
        treeId: 1,
        treeType: "Pine Tree",
        image: "./pine-tree.jpeg",
        dateMsg: "Planted at 2022-02-19 15:30",
    },
    {
        treeId: 2,
        treeType: "Coconut Tree",
        image: "./coconut-tree.jpeg",
        dateMsg: "Planted at 2022-02-19 17:50",
    },
];

const trees2 = [
    {
        treeId: 1,
        date: "2022.02.19 13:00",
    },
    {
        treeId: 2,
        date: "2022.02.19 19:40",
    },
];


const Forest = () => {
    return (
        <>
            <div class="container mx-auto px-4">
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

            <div className="flex flex-col">
                <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                        <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        >
                                            Tree No.
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        >
                                            Date
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {trees2.map((tree, treeIdx) => (
                                        <tr
                                            key={tree.treeId}
                                            className={treeIdx % 2 === 0 ? "bg-white" : "bg-gray-50"}
                                        >
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                                {tree.treeId}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                {tree.date}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Forest
