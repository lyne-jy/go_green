
import React from 'react'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { useLoader } from '@react-three/fiber'

const TreeFat = (props) => {
    const obj = useLoader(GLTFLoader, '/obj/tree_fat.glb')
    const txt = useLoader(TextureLoader, '/obj/tree_fat.png')

    return (
        <mesh position={props.position}>
            <primitive object={obj.scene.clone(true)} />
        </mesh>
    )
}

export default TreeFat
