import React from 'react'
import Navbar from "./components/nav";
import TreeTable from "./components/treeTable";
import TreeList from "./components/treeList";

const Forest = () => {
    return (
        <>
            <Navbar />
            <TreeTable />
            <TreeList />
        </>
    )
}

export default Forest
