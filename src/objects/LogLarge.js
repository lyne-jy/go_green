
import React from 'react'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { useLoader } from '@react-three/fiber'

const LogLarge = (props) => {
    const obj = useLoader(GLTFLoader, '/obj/log_large.glb')
    const txt = useLoader(TextureLoader, '/obj/log_large.png')

    return (
        <mesh position={props.position}>
            <primitive object={obj.scene} map={txt} />
        </mesh>
    )
}

export default LogLarge
