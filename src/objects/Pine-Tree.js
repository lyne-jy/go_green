
import React from 'react'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { useLoader } from '@react-three/fiber'

const Pine_Tree = (props) => {
    const obj = useLoader(GLTFLoader, '/obj/pine-tree.glb')
    const txt = useLoader(TextureLoader, '/obj/pine-tree.png')

    return (
        <mesh position={props.position}>
            <primitive object={obj.scene.clone(true)} />
        </mesh>
    )
}

export default Pine_Tree
