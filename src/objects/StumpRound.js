
import React from 'react'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { useLoader } from '@react-three/fiber'

const StumpRound = (props) => {
    const obj = useLoader(GLTFLoader, '/obj/stump_round.glb')
    const txt = useLoader(TextureLoader, '/obj/stump_round.png')

    return (
        <mesh position={props.position}>
            <primitive object={obj.scene.clone(true)} />
        </mesh>
    )
}

export default StumpRound
