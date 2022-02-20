import logo from "./logo.svg";
import "./App.css";
import { ArrowLeftIcon } from "@heroicons/react/solid";
import Navbar from "./components/nav";
import TreeTable from "./components/treeTable";
import TreeList from "./components/treeList";
import React from "react";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <TreeTable />
      <TreeList />
    </React.Fragment>
  );
}

export default App;
