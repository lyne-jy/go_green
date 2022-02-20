
import React from 'react'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { useLoader } from '@react-three/fiber'

const PlatformBeach = (props) => {
    const obj = useLoader(GLTFLoader, '/obj/platform_beach.glb')
    const txt = useLoader(TextureLoader, '/obj/platform_beach.png')

    return (
        <mesh position={props.position}>
            <primitive object={obj.scene} map={txt} />
        </mesh>
    )
}

export default PlatformBeach
