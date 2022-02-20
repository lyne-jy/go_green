
import React from 'react'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { useLoader } from '@react-three/fiber'

const RockSmalle = (props) => {
    const obj = useLoader(GLTFLoader, '/obj/rock_smallE.glb')
    const txt = useLoader(TextureLoader, '/obj/rock_smallE.png')

    return (
        <mesh position={props.position}>
            <primitive object={obj.scene.clone(true)} />
        </mesh>
    )
}

export default RockSmalle
