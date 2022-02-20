
import React from 'react'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { useLoader } from '@react-three/fiber'

const PathStonecorner = (props) => {
    const obj = useLoader(GLTFLoader, '/obj/path_stoneCorner.glb')
    const txt = useLoader(TextureLoader, '/obj/path_stoneCorner.png')

    return (
        <mesh position={props.position}>
            <primitive object={obj.scene} map={txt} />
        </mesh>
    )
}

export default PathStonecorner
