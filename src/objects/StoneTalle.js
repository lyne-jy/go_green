
import React from 'react'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { useLoader } from '@react-three/fiber'

const StoneTalle = (props) => {
    const obj = useLoader(GLTFLoader, '/obj/stone_tallE.glb')
    const txt = useLoader(TextureLoader, '/obj/stone_tallE.png')

    return (
        <mesh position={props.position}>
            <primitive object={obj.scene.clone(true)} />
        </mesh>
    )
}

export default StoneTalle
