
import React from 'react'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { useLoader } from '@react-three/fiber'

const GroundRiverrocks = (props) => {
    const obj = useLoader(GLTFLoader, '/obj/ground_riverRocks.glb')
    const txt = useLoader(TextureLoader, '/obj/ground_riverRocks.png')

    return (
        <mesh position={props.position}>
            <primitive object={obj.scene.clone(true)} />
        </mesh>
    )
}

export default GroundRiverrocks
