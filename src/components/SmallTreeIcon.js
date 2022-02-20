import React from 'react'
import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'

import './SmallTreeIcon.css';

const SmallTreeIcon = (props) => {
    return (
        <Suspense fallback={<span>loading...</span>}>
            <div className='small-tree-icon-wrapper'>
                <Canvas colorManagement camera={{ position: [90, 0, 5], fov: 2, zoom: 1, near: 30 }} className="small-tree-icon">
                    <spotLight position={[0, 0, 120]} angle={1} />
                    <ambientLight position={[0, 0, 120]} intensity={1} />
                    {props.children}
                </Canvas>
            </div>
        </Suspense>
    )
}

export default SmallTreeIcon