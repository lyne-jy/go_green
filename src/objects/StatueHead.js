
import React from 'react'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { useLoader } from '@react-three/fiber'

const StatueHead = (props) => {
    const obj = useLoader(GLTFLoader, '/obj/statue_head.glb')
    const txt = useLoader(TextureLoader, '/obj/statue_head.png')

    return (
        <mesh position={props.position}>
            <primitive object={obj.scene.clone(true)} />
        </mesh>
    )
}

export default StatueHead
