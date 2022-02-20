
import React from 'react'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { useLoader } from '@react-three/fiber'

const GroundPathsideopen = (props) => {
    const obj = useLoader(GLTFLoader, '/obj/ground_pathSideOpen.glb')
    const txt = useLoader(TextureLoader, '/obj/ground_pathSideOpen.png')

    return (
        <mesh position={props.position}>
            <primitive object={obj.scene} map={txt} />
        </mesh>
    )
}

export default GroundPathsideopen
