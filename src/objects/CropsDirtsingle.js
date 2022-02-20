
import React from 'react'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { useLoader } from '@react-three/fiber'

const CropsDirtsingle = (props) => {
    const obj = useLoader(GLTFLoader, '/obj/crops_dirtSingle.glb')
    const txt = useLoader(TextureLoader, '/obj/crops_dirtSingle.png')

    return (
        <mesh position={props.position}>
            <primitive object={obj.scene.clone(true)} />
        </mesh>
    )
}

export default CropsDirtsingle
