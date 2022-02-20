import React from 'react';
import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'


import BridgeCenterWood from '../components/BridgeCenterWood';
import TreeCone from '../components/TreeCone';



const Forest = () => {
    return (
        <Suspense fallback={<span>loading...</span>}>
            <Canvas colorManagement camera={{ position: [50,50,500], fov: 2, zoom: 30, near: 30 }}>
                {/* <pointLight args={[`white`, 1, 100]} position={[-5, 5, 5]} /> */}
                {/* <pointLight args={[`white`, 1, 100]} position={[65, 5, 5]} /> */}
                <spotLight position={[0, 0, 120]} angle={0.3} />
                <ambientLight position={[0, 0, 120]} intensity={0.5} />
                <TreeCone />
                {/* <BridgeCenterWood /> */}
            </Canvas>
        </Suspense>
    )
}

export default Forest