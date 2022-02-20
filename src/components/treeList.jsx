/* This example requires Tailwind CSS v2.0+ */
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

export default function TreeList() {
  return (
    <div class="container mx-auto px-4">
      <ul role="list" className="divide-y divide-gray-200">
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
  );
}
