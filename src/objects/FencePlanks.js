
import React from 'react'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { useLoader } from '@react-three/fiber'

const FencePlanks = (props) => {
    const obj = useLoader(GLTFLoader, '/obj/fence_planks.glb')
    const txt = useLoader(TextureLoader, '/obj/fence_planks.png')

    return (
        <mesh position={props.position}>
            <primitive object={obj.scene.clone(true)} />
        </mesh>
    )
}

export default FencePlanks
