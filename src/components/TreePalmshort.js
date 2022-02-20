
import React from 'react'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { useLoader } from '@react-three/fiber'

const TreePalmshort = (props) => {
    const obj = useLoader(GLTFLoader, '/obj/tree_palmShort.glb')
    const txt = useLoader(TextureLoader, '/obj/tree_palmShort.png')

    return (
        <mesh position={props.position}>
            <primitive object={obj.scene} map={txt} />
        </mesh>
    )
}

export default TreePalmshort
