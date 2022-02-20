import React from 'react'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { useLoader } from '@react-three/fiber'

const TreeCone = () => {
    const obj = useLoader(GLTFLoader, '/obj/tree_cone.glb')
    const txt = useLoader(TextureLoader, '/obj/tree_cone.png')

    return (
        <mesh position={[0, 0, 0]}>
            <primitive object={obj.scene} map={txt} />
        </mesh>
    )
}

export default TreeCone
