
import React from 'react'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { useLoader } from '@react-three/fiber'

const TreePineroundf = (props) => {
    const obj = useLoader(GLTFLoader, '/obj/tree_pineRoundF.glb')
    const txt = useLoader(TextureLoader, '/obj/tree_pineRoundF.png')

    return (
        <mesh position={props.position}>
            <primitive object={obj.scene.clone(true)} />
        </mesh>
    )
}

export default TreePineroundf
