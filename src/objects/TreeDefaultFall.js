
import React from 'react'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { useLoader } from '@react-three/fiber'

const TreeDefaultFall = (props) => {
    const obj = useLoader(GLTFLoader, '/obj/tree_default_fall.glb')
    const txt = useLoader(TextureLoader, '/obj/tree_default_fall.png')

    return (
        <mesh position={props.position}>
            <primitive object={obj.scene.clone(true)} />
        </mesh>
    )
}

export default TreeDefaultFall
