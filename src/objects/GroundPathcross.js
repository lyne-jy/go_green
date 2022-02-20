
import React from 'react'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { useLoader } from '@react-three/fiber'

const GroundPathcross = (props) => {
    const obj = useLoader(GLTFLoader, '/obj/ground_pathCross.glb')
    const txt = useLoader(TextureLoader, '/obj/ground_pathCross.png')

    return (
        <mesh position={props.position}>
            <primitive object={obj.scene} map={txt} />
        </mesh>
    )
}

export default GroundPathcross
