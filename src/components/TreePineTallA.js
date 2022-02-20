import React from 'react'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { useLoader } from '@react-three/fiber'

const TreePineTallA = () => {
    const obj = useLoader(GLTFLoader, '/obj/tree_pineTallA.glb')
    const txt = useLoader(TextureLoader, '/obj/tree_pineTallA.png')

    return (
        <mesh>
            <primitive object={obj.scene} map={txt} />
        </mesh>
    )
}

export default TreePineTallA
