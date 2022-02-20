
import React from 'react'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { useLoader } from '@react-three/fiber'

const PathWoodend = (props) => {
    const obj = useLoader(GLTFLoader, '/obj/path_woodEnd.glb')
    const txt = useLoader(TextureLoader, '/obj/path_woodEnd.png')

    return (
        <mesh position={props.position}>
            <primitive object={obj.scene} map={txt} />
        </mesh>
    )
}

export default PathWoodend
