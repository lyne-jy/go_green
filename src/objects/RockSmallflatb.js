
import React from 'react'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { useLoader } from '@react-three/fiber'

const RockSmallflatb = (props) => {
    const obj = useLoader(GLTFLoader, '/obj/rock_smallFlatB.glb')
    const txt = useLoader(TextureLoader, '/obj/rock_smallFlatB.png')

    return (
        <mesh position={props.position}>
            <primitive object={obj.scene.clone(true)} />
        </mesh>
    )
}

export default RockSmallflatb
