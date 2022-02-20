
import React from 'react'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { useLoader } from '@react-three/fiber'

const PathWoodcorner = (props) => {
    const obj = useLoader(GLTFLoader, '/obj/path_woodCorner.glb')
    const txt = useLoader(TextureLoader, '/obj/path_woodCorner.png')

    return (
        <mesh position={props.position}>
            <primitive object={obj.scene.clone(true)} />
        </mesh>
    )
}

export default PathWoodcorner
