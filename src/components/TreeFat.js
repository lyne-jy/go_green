import React from 'react'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { useLoader } from '@react-three/fiber'

const TreeFat = () => {
    const obj = useLoader(GLTFLoader, '/obj/tree_fat.glb')
    const txt = useLoader(TextureLoader, '/obj/tree_fat.png')

    return (
        <mesh>
            <primitive object={obj.scene} map={txt} />
        </mesh>
    )
}

export default TreeFat
