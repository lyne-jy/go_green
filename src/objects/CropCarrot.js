
import React from 'react'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { useLoader } from '@react-three/fiber'

const CropCarrot = (props) => {
    const obj = useLoader(GLTFLoader, '/obj/crop_carrot.glb')
    const txt = useLoader(TextureLoader, '/obj/crop_carrot.png')

    return (
        <mesh position={props.position}>
            <primitive object={obj.scene.clone(true)} />
        </mesh>
    )
}

export default CropCarrot
