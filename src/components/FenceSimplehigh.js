
import React from 'react'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { useLoader } from '@react-three/fiber'

const FenceSimplehigh = (props) => {
    const obj = useLoader(GLTFLoader, '/obj/fence_simpleHigh.glb')
    const txt = useLoader(TextureLoader, '/obj/fence_simpleHigh.png')

    return (
        <mesh position={props.position}>
            <primitive object={obj.scene} map={txt} />
        </mesh>
    )
}

export default FenceSimplehigh
