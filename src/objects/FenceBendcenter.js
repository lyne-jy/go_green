
import React from 'react'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { useLoader } from '@react-three/fiber'

const FenceBendcenter = (props) => {
    const obj = useLoader(GLTFLoader, '/obj/fence_bendCenter.glb')
    const txt = useLoader(TextureLoader, '/obj/fence_bendCenter.png')

    return (
        <mesh position={props.position}>
            <primitive object={obj.scene} map={txt} />
        </mesh>
    )
}

export default FenceBendcenter
