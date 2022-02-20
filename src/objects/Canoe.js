
import React from 'react'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { useLoader } from '@react-three/fiber'

const Canoe = (props) => {
    const obj = useLoader(GLTFLoader, '/obj/canoe.glb')
    const txt = useLoader(TextureLoader, '/obj/canoe.png')

    return (
        <mesh position={props.position}>
            <primitive object={obj.scene} map={txt} />
        </mesh>
    )
}

export default Canoe
