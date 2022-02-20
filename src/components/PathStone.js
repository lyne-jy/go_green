
import React from 'react'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { useLoader } from '@react-three/fiber'

const PathStone = (props) => {
    const obj = useLoader(GLTFLoader, '/obj/path_stone.glb')
    const txt = useLoader(TextureLoader, '/obj/path_stone.png')

    return (
        <mesh position={props.position}>
            <primitive object={obj.scene} map={txt} />
        </mesh>
    )
}

export default PathStone
