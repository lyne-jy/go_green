
import React from 'react'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { useLoader } from '@react-three/fiber'

const StoneTallj = (props) => {
    const obj = useLoader(GLTFLoader, '/obj/stone_tallJ.glb')
    const txt = useLoader(TextureLoader, '/obj/stone_tallJ.png')

    return (
        <mesh position={props.position}>
            <primitive object={obj.scene.clone(true)} />
        </mesh>
    )
}

export default StoneTallj
