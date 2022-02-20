
import React from 'react'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { useLoader } from '@react-three/fiber'

const StatueRing = (props) => {
    const obj = useLoader(GLTFLoader, '/obj/statue_ring.glb')
    const txt = useLoader(TextureLoader, '/obj/statue_ring.png')

    return (
        <mesh position={props.position}>
            <primitive object={obj.scene} map={txt} />
        </mesh>
    )
}

export default StatueRing
