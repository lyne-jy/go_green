import React from 'react'
import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Plane } from "@react-three/drei";

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

const ForestCanvas = () => {
    return (
        <Suspense fallback={ <></> }>
            <Canvas colorManagement camera={{ position: [45, 45, 45], fov: 2, zoom: 0.4, near: 30 }} className="small-tree-icon">
                {/* <Plane args={[10, 10]} position={[0, 0, -100]}>
                    <meshStandardMaterial color={"green"} />
                </Plane> */}
                <color attach="background" args={['#d6f9ff']} />
                <spotLight position={[5, 5, 0]} angle={90} intensity={0.7} />
                <spotLight position={[5, 5, 90]} angle={180} intensity={0.9} />
                <ambientLight position={[1, 1, 1]} intensity={100} />
                <TreeCone position={[0, -0.6, 0]} />
                <TreeBlocks position={[1, -0.6, 0]} />
                <TreePineRoundC position={[2, -0.6, 0]} />
            </Canvas>
        </Suspense>
    )
}

export default ForestCanvas
