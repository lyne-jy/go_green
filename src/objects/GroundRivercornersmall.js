
import React from 'react'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { useLoader } from '@react-three/fiber'

const GroundRivercornersmall = (props) => {
    const obj = useLoader(GLTFLoader, '/obj/ground_riverCornerSmall.glb')
    const txt = useLoader(TextureLoader, '/obj/ground_riverCornerSmall.png')

    return (
        <mesh position={props.position}>
            <primitive object={obj.scene.clone(true)} />
        </mesh>
    )
}

export default GroundRivercornersmall
