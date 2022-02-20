import React, {lazy} from 'react'
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


const ForestCanvas = ({ trees }) => {

    for (let tree of trees) {
        tree.comp = lazy(() => import("../objects/" + tree.tree))
        tree.x = Math.random() * -3;
        tree.y = Math.random() * -3;
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
                    trees.map((tree) => (
                        <tree.comp position={[tree.x, tree.y, 0]} />
                        
                    ))
                }

            </Canvas>
        </Suspense>
    )
}

export default ForestCanvas
