
import React from 'react'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { useLoader } from '@react-three/fiber'

const CliffStepsStone = (props) => {
    const obj = useLoader(GLTFLoader, '/obj/cliff_steps_stone.glb')
    const txt = useLoader(TextureLoader, '/obj/cliff_steps_stone.png')

    return (
        <mesh position={props.position}>
            <primitive object={obj.scene} map={txt} />
        </mesh>
    )
}

export default CliffStepsStone
