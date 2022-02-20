
import React from 'react'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { useLoader } from '@react-three/fiber'

const LogStacklarge = (props) => {
    const obj = useLoader(GLTFLoader, '/obj/log_stackLarge.glb')
    const txt = useLoader(TextureLoader, '/obj/log_stackLarge.png')

    return (
        <mesh position={props.position}>
            <primitive object={obj.scene.clone(true)} />
        </mesh>
    )
}

export default LogStacklarge
