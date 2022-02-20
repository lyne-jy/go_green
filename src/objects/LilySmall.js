
import React from 'react'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { useLoader } from '@react-three/fiber'

const LilySmall = (props) => {
    const obj = useLoader(GLTFLoader, '/obj/lily_small.glb')
    const txt = useLoader(TextureLoader, '/obj/lily_small.png')

    return (
        <mesh position={props.position}>
            <primitive object={obj.scene.clone(true)} />
        </mesh>
    )
}

export default LilySmall
