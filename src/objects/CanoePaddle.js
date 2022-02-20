
import React from 'react'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { useLoader } from '@react-three/fiber'

const CanoePaddle = (props) => {
    const obj = useLoader(GLTFLoader, '/obj/canoe_paddle.glb')
    const txt = useLoader(TextureLoader, '/obj/canoe_paddle.png')

    return (
        <mesh position={props.position}>
            <primitive object={obj.scene.clone(true)} />
        </mesh>
    )
}

export default CanoePaddle
