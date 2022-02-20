
import React from 'react'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { useLoader } from '@react-three/fiber'

const FlowerYellowb = (props) => {
    const obj = useLoader(GLTFLoader, '/obj/flower_yellowB.glb')
    const txt = useLoader(TextureLoader, '/obj/flower_yellowB.png')

    return (
        <mesh position={props.position}>
            <primitive object={obj.scene.clone(true)} />
        </mesh>
    )
}

export default FlowerYellowb
