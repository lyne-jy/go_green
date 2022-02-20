
import React from 'react'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { useLoader } from '@react-three/fiber'

const LogStack = (props) => {
    const obj = useLoader(GLTFLoader, '/obj/log_stack.glb')
    const txt = useLoader(TextureLoader, '/obj/log_stack.png')

    return (
        <mesh position={props.position}>
            <primitive object={obj.scene.clone(true)} />
        </mesh>
    )
}

export default LogStack
