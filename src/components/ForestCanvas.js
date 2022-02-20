import React from 'react'
import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'

import './SmallTreeIcon.css';
import TreeCone from '../objects/TreeCone'
import TreeBlocks from '../objects/TreeBlocks';
import TreePineRoundC from '../objects/TreePineRoundC';

const ForestCanvas = () => {
    return (
        <Suspense fallback={ <></> }>
            <Canvas colorManagement camera={{ position: [45, 45, 45], fov: 2, zoom: 0.4, near: 30 }} className="small-tree-icon">
                <spotLight position={[5, 5, 0]} angle={90} intensity={0.7} />
                <spotLight position={[5, 5, 180]} angle={180} intensity={1} />
                <ambientLight position={[1, 1, 1]} intensity={100} />
                <TreeCone position={[0, -0.6, 0]} />
                <TreeBlocks position={[1, -0.6, 0]} />
                <TreePineRoundC position={[2, -0.6, 0]} />
            </Canvas>
        </Suspense>
    )
}

export default ForestCanvas
