
import React from 'react'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { useLoader } from '@react-three/fiber'

const TentSmallopen = (props) => {
    const obj = useLoader(GLTFLoader, '/obj/tent_smallOpen.glb')
    const txt = useLoader(TextureLoader, '/obj/tent_smallOpen.png')

    return (
        <mesh position={props.position}>
            <primitive object={obj.scene} map={txt} />
        </mesh>
    )
}

export default TentSmallopen
