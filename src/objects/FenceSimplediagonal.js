
import React from 'react'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { useLoader } from '@react-three/fiber'

const FenceSimplediagonal = (props) => {
    const obj = useLoader(GLTFLoader, '/obj/fence_simpleDiagonal.glb')
    const txt = useLoader(TextureLoader, '/obj/fence_simpleDiagonal.png')

    return (
        <mesh position={props.position}>
            <primitive object={obj.scene} map={txt} />
        </mesh>
    )
}

export default FenceSimplediagonal
