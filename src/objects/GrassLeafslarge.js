
import React from 'react'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { useLoader } from '@react-three/fiber'

const GrassLeafslarge = (props) => {
    const obj = useLoader(GLTFLoader, '/obj/grass_leafsLarge.glb')
    const txt = useLoader(TextureLoader, '/obj/grass_leafsLarge.png')

    return (
        <mesh position={props.position}>
            <primitive object={obj.scene} map={txt} />
        </mesh>
    )
}

export default GrassLeafslarge