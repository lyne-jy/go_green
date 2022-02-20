
import React from 'react'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { useLoader } from '@react-three/fiber'

const RockTalli = (props) => {
    const obj = useLoader(GLTFLoader, '/obj/rock_tallI.glb')
    const txt = useLoader(TextureLoader, '/obj/rock_tallI.png')

    return (
        <mesh position={props.position}>
            <primitive object={obj.scene} map={txt} />
        </mesh>
    )
}

export default RockTalli
