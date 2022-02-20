
import React from 'react'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { useLoader } from '@react-three/fiber'

const TreePinetallbDetailed = (props) => {
    const obj = useLoader(GLTFLoader, '/obj/tree_pineTallB_detailed.glb')
    const txt = useLoader(TextureLoader, '/obj/tree_pineTallB_detailed.png')

    return (
        <mesh position={props.position}>
            <primitive object={obj.scene.clone(true)} />
        </mesh>
    )
}

export default TreePinetallbDetailed
