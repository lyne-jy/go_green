
import React from 'react'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { useLoader } from '@react-three/fiber'

const GroundPathtile = (props) => {
    const obj = useLoader(GLTFLoader, '/obj/ground_pathTile.glb')
    const txt = useLoader(TextureLoader, '/obj/ground_pathTile.png')

    return (
        <mesh position={props.position}>
            <primitive object={obj.scene} map={txt} />
        </mesh>
    )
}

export default GroundPathtile
