
import React from 'react'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { useLoader } from '@react-three/fiber'

const StatueColumndamaged = (props) => {
    const obj = useLoader(GLTFLoader, '/obj/statue_columnDamaged.glb')
    const txt = useLoader(TextureLoader, '/obj/statue_columnDamaged.png')

    return (
        <mesh position={props.position}>
            <primitive object={obj.scene} map={txt} />
        </mesh>
    )
}

export default StatueColumndamaged
