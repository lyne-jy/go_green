
import React from 'react'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { useLoader } from '@react-three/fiber'

const FlowerReda = (props) => {
    const obj = useLoader(GLTFLoader, '/obj/flower_redA.glb')
    const txt = useLoader(TextureLoader, '/obj/flower_redA.png')

    return (
        <mesh position={props.position}>
            <primitive object={obj.scene} map={txt} />
        </mesh>
    )
}

export default FlowerReda
