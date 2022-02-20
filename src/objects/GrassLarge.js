
import React from 'react'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { useLoader } from '@react-three/fiber'

const GrassLarge = (props) => {
    const obj = useLoader(GLTFLoader, '/obj/grass_large.glb')
    const txt = useLoader(TextureLoader, '/obj/grass_large.png')

    return (
        <mesh position={props.position}>
            <primitive object={obj.scene.clone(true)} />
        </mesh>
    )
}

export default GrassLarge
