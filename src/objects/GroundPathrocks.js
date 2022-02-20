
import React from 'react'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { useLoader } from '@react-three/fiber'

const GroundPathrocks = (props) => {
    const obj = useLoader(GLTFLoader, '/obj/ground_pathRocks.glb')
    const txt = useLoader(TextureLoader, '/obj/ground_pathRocks.png')

    return (
        <mesh position={props.position}>
            <primitive object={obj.scene} map={txt} />
        </mesh>
    )
}

export default GroundPathrocks
