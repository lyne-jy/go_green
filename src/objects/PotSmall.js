
import React from 'react'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { useLoader } from '@react-three/fiber'

const PotSmall = (props) => {
    const obj = useLoader(GLTFLoader, '/obj/pot_small.glb')
    const txt = useLoader(TextureLoader, '/obj/pot_small.png')

    return (
        <mesh position={props.position}>
            <primitive object={obj.scene.clone(true)} />
        </mesh>
    )
}

export default PotSmall
