
import React from 'react'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { useLoader } from '@react-three/fiber'

const Sign = (props) => {
    const obj = useLoader(GLTFLoader, '/obj/sign.glb')
    const txt = useLoader(TextureLoader, '/obj/sign.png')

    return (
        <mesh position={props.position}>
            <primitive object={obj.scene.clone(true)} />
        </mesh>
    )
}

export default Sign
