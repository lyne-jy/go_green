
import React from 'react'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { useLoader } from '@react-three/fiber'

const TentSmallclosed = (props) => {
    const obj = useLoader(GLTFLoader, '/obj/tent_smallClosed.glb')
    const txt = useLoader(TextureLoader, '/obj/tent_smallClosed.png')

    return (
        <mesh position={props.position}>
            <primitive object={obj.scene.clone(true)} />
        </mesh>
    )
}

export default TentSmallclosed
