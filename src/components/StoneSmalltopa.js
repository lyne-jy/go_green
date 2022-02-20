
import React from 'react'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { useLoader } from '@react-three/fiber'

const StoneSmalltopa = (props) => {
    const obj = useLoader(GLTFLoader, '/obj/stone_smallTopA.glb')
    const txt = useLoader(TextureLoader, '/obj/stone_smallTopA.png')

    return (
        <mesh position={props.position}>
            <primitive object={obj.scene} map={txt} />
        </mesh>
    )
}

export default StoneSmalltopa