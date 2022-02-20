
import React from 'react'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { useLoader } from '@react-three/fiber'

const Coconut_Tree = (props) => {
    const obj = useLoader(GLTFLoader, '/obj/coconut-tree.glb')
    const txt = useLoader(TextureLoader, '/obj/coconut-tree.png')

    return (
        <mesh position={props.position}>
            <primitive object={obj.scene.clone(true)} />
        </mesh>
    )
}

export default Coconut_Tree
