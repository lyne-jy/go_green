
import React from 'react'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { useLoader } from '@react-three/fiber'

const FenceSimplelow = (props) => {
    const obj = useLoader(GLTFLoader, '/obj/fence_simpleLow.glb')
    const txt = useLoader(TextureLoader, '/obj/fence_simpleLow.png')

    return (
        <mesh position={props.position}>
            <primitive object={obj.scene.clone(true)} />
        </mesh>
    )
}

export default FenceSimplelow
