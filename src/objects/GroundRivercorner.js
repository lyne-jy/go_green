
import React from 'react'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { useLoader } from '@react-three/fiber'

const GroundRivercorner = (props) => {
    const obj = useLoader(GLTFLoader, '/obj/ground_riverCorner.glb')
    const txt = useLoader(TextureLoader, '/obj/ground_riverCorner.png')

    return (
        <mesh position={props.position}>
            <primitive object={obj.scene.clone(true)} />
        </mesh>
    )
}

export default GroundRivercorner
