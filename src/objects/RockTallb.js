
import React from 'react'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { useLoader } from '@react-three/fiber'

const RockTallb = (props) => {
    const obj = useLoader(GLTFLoader, '/obj/rock_tallB.glb')
    const txt = useLoader(TextureLoader, '/obj/rock_tallB.png')

    return (
        <mesh position={props.position}>
            <primitive object={obj.scene.clone(true)} />
        </mesh>
    )
}

export default RockTallb
