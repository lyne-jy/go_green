
import React from 'react'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { useLoader } from '@react-three/fiber'

const TentDetailedclosed = (props) => {
    const obj = useLoader(GLTFLoader, '/obj/tent_detailedClosed.glb')
    const txt = useLoader(TextureLoader, '/obj/tent_detailedClosed.png')

    return (
        <mesh position={props.position}>
            <primitive object={obj.scene.clone(true)} />
        </mesh>
    )
}

export default TentDetailedclosed
