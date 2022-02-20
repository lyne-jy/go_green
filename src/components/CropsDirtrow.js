
import React from 'react'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { useLoader } from '@react-three/fiber'

const CropsDirtrow = (props) => {
    const obj = useLoader(GLTFLoader, '/obj/crops_dirtRow.glb')
    const txt = useLoader(TextureLoader, '/obj/crops_dirtRow.png')

    return (
        <mesh position={props.position}>
            <primitive object={obj.scene} map={txt} />
        </mesh>
    )
}

export default CropsDirtrow
