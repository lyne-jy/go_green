
import React from 'react'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { useLoader } from '@react-three/fiber'

const PlatformStone = (props) => {
    const obj = useLoader(GLTFLoader, '/obj/platform_stone.glb')
    const txt = useLoader(TextureLoader, '/obj/platform_stone.png')

    return (
        <mesh position={props.position}>
            <primitive object={obj.scene.clone(true)} />
        </mesh>
    )
}

export default PlatformStone
