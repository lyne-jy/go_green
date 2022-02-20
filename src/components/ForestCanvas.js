import React from 'react'
import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'

import './SmallTreeIcon.css';
import TreeBlocks from '../objects/TreeBlocks';
import TreeCone from '../objects/TreeCone'
import TreeDetailed from '../objects/TreeDetailed';
import TreeFat from '../objects/TreeFat';
import TreeOak from '../objects/TreeOak';
import TreePalmDetailedTall from '../objects/TreePalmDetailedTall';
import TreePineRoundC from '../objects/TreePineRoundC';
import TreePineTallA from '../objects/TreePineTallA';
import TreePlateau from '../objects/TreePlateau';
import TreeTall from '../objects/TreeTall';
import TreeThin from '../objects/TreeThin';
import GroundGrass from '../objects/GroundGrass';

const tree_types = [
    TreeCone,
    TreeBlocks,
    TreeDetailed,
    TreeFat,
    TreeOak,
    TreePalmDetailedTall,
    TreePineRoundC,
    TreePineTallA,
    TreePlateau,
    TreeTall,
    TreeThin
];


const makeGround = () => {
    let a = [];

    for (let x = -15; x < 5; x++) {
        for (let y = -15; y < 5; y++) {
            a.push(<GroundGrass position={[x*0.8, y*0.8, -5]} />);
        }
    }

    // return dom in a
    return a;
}

const ForestCanvas = () => {
    return (
        <Suspense fallback={ <></> }>
            <Canvas colorManagement camera={{ position: [45, 45, 45], fov: 2, zoom: 0.4 }} className="small-tree-icon">
                <color attach="background" args={['#d6f9ff']} />
                <spotLight position={[5, 5, 0]} angle={90} intensity={0.7} />
                <spotLight position={[5, 5, 90]} angle={180} intensity={0.9} />
                <spotLight position={[5, 50, 0]} angle={180} intensity={0.6} />
                <ambientLight position={[1, 1, 1]} intensity={100} />
                <TreeCone position={[0, -0.6, 0]} />
                <TreeBlocks position={[1, -0.6, 0]} />
                <TreePineRoundC position={[2, -0.6, 0]} />

                {/* {makeGround()} */}

                

            </Canvas>
        </Suspense>
    )
}

export default ForestCanvas
