
import React from 'react'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { useLoader } from '@react-three/fiber'

const TreePlateauFall = (props) => {
    const obj = useLoader(GLTFLoader, '/obj/tree_plateau_fall.glb')
    const txt = useLoader(TextureLoader, '/obj/tree_plateau_fall.png')

    return (
        <mesh position={props.position}>
            <primitive object={obj.scene} map={txt} />
        </mesh>
    )
}

export default TreePlateauFall
