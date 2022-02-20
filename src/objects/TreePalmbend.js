
import React from 'react'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { useLoader } from '@react-three/fiber'

const TreePalmbend = (props) => {
    const obj = useLoader(GLTFLoader, '/obj/tree_palmBend.glb')
    const txt = useLoader(TextureLoader, '/obj/tree_palmBend.png')

    return (
        <mesh position={props.position}>
            <primitive object={obj.scene} map={txt} />
        </mesh>
    )
}

export default TreePalmbend