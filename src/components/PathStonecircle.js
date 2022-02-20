
import React from 'react'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { useLoader } from '@react-three/fiber'

const PathStonecircle = (props) => {
    const obj = useLoader(GLTFLoader, '/obj/path_stoneCircle.glb')
    const txt = useLoader(TextureLoader, '/obj/path_stoneCircle.png')

    return (
        <mesh position={props.position}>
            <primitive object={obj.scene} map={txt} />
        </mesh>
    )
}

export default PathStonecircle
