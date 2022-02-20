
import React from 'react'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { useLoader } from '@react-three/fiber'

const GroundRiverstraight = (props) => {
    const obj = useLoader(GLTFLoader, '/obj/ground_riverStraight.glb')
    const txt = useLoader(TextureLoader, '/obj/ground_riverStraight.png')

    return (
        <mesh position={props.position}>
            <primitive object={obj.scene} map={txt} />
        </mesh>
    )
}

export default GroundRiverstraight