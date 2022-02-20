
import React from 'react'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { useLoader } from '@react-three/fiber'

const TreePinesmalld = (props) => {
    const obj = useLoader(GLTFLoader, '/obj/tree_pineSmallD.glb')
    const txt = useLoader(TextureLoader, '/obj/tree_pineSmallD.png')

    return (
        <mesh position={props.position}>
            <primitive object={obj.scene} map={txt} />
        </mesh>
    )
}

export default TreePinesmalld