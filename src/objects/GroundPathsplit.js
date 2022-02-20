
import React from 'react'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { useLoader } from '@react-three/fiber'

const GroundPathsplit = (props) => {
    const obj = useLoader(GLTFLoader, '/obj/ground_pathSplit.glb')
    const txt = useLoader(TextureLoader, '/obj/ground_pathSplit.png')

    return (
        <mesh position={props.position}>
            <primitive object={obj.scene.clone(true)} />
        </mesh>
    )
}

export default GroundPathsplit
