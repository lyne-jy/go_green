
import React from 'react'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { useLoader } from '@react-three/fiber'

const StatueBlock = (props) => {
    const obj = useLoader(GLTFLoader, '/obj/statue_block.glb')
    const txt = useLoader(TextureLoader, '/obj/statue_block.png')

    return (
        <mesh position={props.position}>
            <primitive object={obj.scene.clone(true)} />
        </mesh>
    )
}

export default StatueBlock
