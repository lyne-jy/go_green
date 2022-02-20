
import React from 'react'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { useLoader } from '@react-three/fiber'

const GroundPathbendbank = (props) => {
    const obj = useLoader(GLTFLoader, '/obj/ground_pathBendBank.glb')
    const txt = useLoader(TextureLoader, '/obj/ground_pathBendBank.png')

    return (
        <mesh position={props.position}>
            <primitive object={obj.scene.clone(true)} />
        </mesh>
    )
}

export default GroundPathbendbank
