
import React from 'react'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { useLoader } from '@react-three/fiber'

const CactusShort = (props) => {
    const obj = useLoader(GLTFLoader, '/obj/cactus_short.glb')
    const txt = useLoader(TextureLoader, '/obj/cactus_short.png')

    return (
        <mesh position={props.position}>
            <primitive object={obj.scene.clone(true)} />
        </mesh>
    )
}

export default CactusShort
