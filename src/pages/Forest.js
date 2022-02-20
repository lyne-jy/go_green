import React from 'react';
import { Suspense } from 'react'


import TreeCone from '../components/TreeCone';
import SmallTreeIcon from '../components/SmallTreeIcon';


// const Forest = () => {
//     return (
//         <Suspense fallback={<span>loading...</span>}>
//             <Canvas colorManagement camera={{ position: [100,0,5], fov: 2, zoom: 1, near: 30 }} className="canvas">
//                 {/* <pointLight args={[`white`, 1, 100]} position={[-5, 5, 5]} /> */}
//                 {/* <pointLight args={[`white`, 1, 100]} position={[65, 5, 5]} /> */}
//                 <spotLight position={[0, 0, 120]} angle={1} />
//                 <ambientLight position={[0, 0, 120]} intensity={1} />
//                 <TreeCone />
//                 {/* <BridgeCenterWood /> */}
//             </Canvas>
//         </Suspense>
//     )
// }

const Forest = () => {
    return (
        <Suspense fallback={<span>loading...</span>}>
            <SmallTreeIcon>
                <TreeCone />
            </SmallTreeIcon>
        </Suspense>
    )
}

export default Forest