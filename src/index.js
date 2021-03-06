import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./index.css";
import App from "./App";
import Forest from "./pages/Forest";
import Navbar from "./components/Navbar";
import Checkout from "./components/Checkout";

function components(...components) {
    return <>{components.map((component) => component)}</>;
}


const data = {
    current: Math.round(Math.random() * 5000),
    trees: [
        {
            treeType: "Cone Tree",
            image: "../obj/tree_cone.png",
            tree: "TreeCone",
            date: "Planted at 2022-02-19 15:30",
        },
        {
            treeType: "Palm Tree",
            image: "../obj/tree_palmDetailedTall.png",
            tree: "TreePalmDetailedTall",
            date: "Planted at 2022-02-19 17:50",
        },
        {
            treeType: "Pine Tree",
            image: "../obj/tree_pineRoundC.png",
            tree: "TreePineRoundC",
            date: "Planted at 2022-02-19 17:50",
        },
        {
            treeType: "Pine Tree",
            image: "../obj/tree_pineRoundC.png",
            tree: "TreePineRoundC",
            date: "Planted at 2022-02-19 17:50",
        },
        {
            treeType: "Pine Tree",
            image: "../obj/tree_pineRoundC.png",
            tree: "TreePineRoundC",
            date: "Planted at 2022-02-19 17:50",
        },
        {
            treeType: "Pine Tree",
            image: "../obj/tree_pineRoundC.png",
            tree: "TreePineRoundC",
            date: "Planted at 2022-02-19 17:50",
        },
        {
            treeType: "Pine Tree",
            image: "../obj/tree_pineRoundC.png",
            tree: "TreePineRoundC",
            date: "Planted at 2022-02-19 17:50",
        },
        {
            treeType: "Pine Tree",
            image: "../obj/tree_pineRoundC.png",
            tree: "TreePineRoundC",
            date: "Planted at 2022-02-19 17:50",
        },
        {
            treeType: "Pine Tree",
            image: "../obj/tree_pineRoundC.png",
            tree: "TreePineRoundC",
            date: "Planted at 2022-02-19 17:50",
        },
        {
            treeType: "Pine Tree",
            image: "../obj/tree_pineRoundC.png",
            tree: "TreePineRoundC",
            date: "Planted at 2022-02-19 17:50",
        },
    ]
};

export const DataContext = React.createContext(data);


ReactDOM.render(
    <DataContext.Provider value={data}>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={components(<Navbar avatar className="bg-transparent fixed top-0 w-full z-50 py-4 px-2"/>, <App/>)}/>
                <Route path="/forest" element={components(<Navbar title="Forest" backButton/>, <Forest/>)}/>
            </Routes>
        </BrowserRouter>
    </DataContext.Provider>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
