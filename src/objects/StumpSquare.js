
import React from 'react'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { useLoader } from '@react-three/fiber'

const StumpSquare = (props) => {
    const obj = useLoader(GLTFLoader, '/obj/stump_square.glb')
    const txt = useLoader(TextureLoader, '/obj/stump_square.png')

    return (
        <mesh position={props.position}>
            <primitive object={obj.scene.clone(true)} />
        </mesh>
    )
}

export default StumpSquare
