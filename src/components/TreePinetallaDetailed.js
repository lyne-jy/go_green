
import React from 'react'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { useLoader } from '@react-three/fiber'

const TreePinetallaDetailed = (props) => {
    const obj = useLoader(GLTFLoader, '/obj/tree_pineTallA_detailed.glb')
    const txt = useLoader(TextureLoader, '/obj/tree_pineTallA_detailed.png')

    return (
        <mesh position={props.position}>
            <primitive object={obj.scene} map={txt} />
        </mesh>
    )
}

export default TreePinetallaDetailed