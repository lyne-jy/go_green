import React, { lazy, useContext } from 'react'
import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'

import './SmallTreeIcon.css';
import { DataContext } from '..';

const ForestCanvas = () => {
    const data = useContext(DataContext);
    const trees = data.trees;

    for (let t = 0; t < Math.random() * 14 + 10; t++) {
        let rand = Math.random() * 10;
        let tree = "";

        if (rand < 2) {
            tree = "Grass";
        } else if (rand < 4) {
            tree = "FlowerReda";
        } else if (rand < 6) {
            tree = "MushroomRed"
        } else if (rand < 7) {
            tree = "MushroomTan"
        } else if(rand < 8) {
            tree = "FlowerRedc"
        } else {
            tree = "GrassLarge"
        }

        let new_tree = {};
        new_tree.tree = tree;
        trees.push(new_tree);
    }

    for (let tree of trees) {
        console.log(tree.comp);

        if (!tree.tree) {
            tree.tree = "Grass"
        }

        let n = Math.random();
        if (n < 0.5) {
            n = -1;
        } else {
            n = 1;
        }

        tree.comp = lazy(() => import("../objects/" + tree.tree))
        tree.x = Math.random() * 3 * n;
        tree.y = Math.random() * 3 * n;
    }


    return (
        <Suspense fallback={ <></> }>
            <Canvas colorManagement camera={{ position: [45, 45, 45], fov: 2, zoom: 0.4 }} className="small-tree-icon">
                <color attach="background" args={['#d6f9ff']} />
                <spotLight position={[5, 5, 0]} angle={90} intensity={0.7} />
                <spotLight position={[5, 5, 90]} angle={180} intensity={0.9} />
                <spotLight position={[5, 50, 0]} angle={180} intensity={0.6} />
                <ambientLight position={[1, 1, 1]} intensity={100} />

                {
                    trees.map((tree, key) => (
                        <tree.comp key={key + Math.random() * 1000} position={[tree.x, tree.y, 0]} />
                        
                    ))
                }

            </Canvas>
        </Suspense>
    )
}

export default ForestCanvas
