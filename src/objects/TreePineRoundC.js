
import React from 'react'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { useLoader } from '@react-three/fiber'

const TreePineroundc = (props) => {
    const obj = useLoader(GLTFLoader, '/obj/tree_pineRoundC.glb')
    const txt = useLoader(TextureLoader, '/obj/tree_pineRoundC.png')

    return (
        <mesh position={props.position}>
            <primitive object={obj.scene.clone(true)} />
        </mesh>
    )
}

export default TreePineroundc
