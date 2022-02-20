
import React from 'react'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { useLoader } from '@react-three/fiber'

const GroundRiveropen = (props) => {
    const obj = useLoader(GLTFLoader, '/obj/ground_riverOpen.glb')
    const txt = useLoader(TextureLoader, '/obj/ground_riverOpen.png')

    return (
        <mesh position={props.position}>
            <primitive object={obj.scene} map={txt} />
        </mesh>
    )
}

export default GroundRiveropen
