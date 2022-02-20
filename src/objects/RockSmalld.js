
import React from 'react'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { useLoader } from '@react-three/fiber'

const RockSmalld = (props) => {
    const obj = useLoader(GLTFLoader, '/obj/rock_smallD.glb')
    const txt = useLoader(TextureLoader, '/obj/rock_smallD.png')

    return (
        <mesh position={props.position}>
            <primitive object={obj.scene.clone(true)} />
        </mesh>
    )
}

export default RockSmalld
