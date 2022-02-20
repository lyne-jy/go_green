
import React from 'react'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { useLoader } from '@react-three/fiber'

const TreePinetallcDetailed = (props) => {
    const obj = useLoader(GLTFLoader, '/obj/tree_pineTallC_detailed.glb')
    const txt = useLoader(TextureLoader, '/obj/tree_pineTallC_detailed.png')

    return (
        <mesh position={props.position}>
            <primitive object={obj.scene.clone(true)} />
        </mesh>
    )
}

export default TreePinetallcDetailed
