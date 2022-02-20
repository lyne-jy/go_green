
import React from 'react'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { useLoader } from '@react-three/fiber'

const FlowerPurplec = (props) => {
    const obj = useLoader(GLTFLoader, '/obj/flower_purpleC.glb')
    const txt = useLoader(TextureLoader, '/obj/flower_purpleC.png')

    return (
        <mesh position={props.position}>
            <primitive object={obj.scene.clone(true)} />
        </mesh>
    )
}

export default FlowerPurplec
