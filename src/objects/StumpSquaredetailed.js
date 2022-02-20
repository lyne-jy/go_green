
import React from 'react'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { useLoader } from '@react-three/fiber'

const StumpSquaredetailed = (props) => {
    const obj = useLoader(GLTFLoader, '/obj/stump_squareDetailed.glb')
    const txt = useLoader(TextureLoader, '/obj/stump_squareDetailed.png')

    return (
        <mesh position={props.position}>
            <primitive object={obj.scene.clone(true)} />
        </mesh>
    )
}

export default StumpSquaredetailed
