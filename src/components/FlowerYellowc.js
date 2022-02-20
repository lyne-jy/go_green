
import React from 'react'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { useLoader } from '@react-three/fiber'

const FlowerYellowc = (props) => {
    const obj = useLoader(GLTFLoader, '/obj/flower_yellowC.glb')
    const txt = useLoader(TextureLoader, '/obj/flower_yellowC.png')

    return (
        <mesh position={props.position}>
            <primitive object={obj.scene} map={txt} />
        </mesh>
    )
}

export default FlowerYellowc
