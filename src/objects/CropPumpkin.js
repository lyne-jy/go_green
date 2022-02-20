
import React from 'react'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { useLoader } from '@react-three/fiber'

const CropPumpkin = (props) => {
    const obj = useLoader(GLTFLoader, '/obj/crop_pumpkin.glb')
    const txt = useLoader(TextureLoader, '/obj/crop_pumpkin.png')

    return (
        <mesh position={props.position}>
            <primitive object={obj.scene} map={txt} />
        </mesh>
    )
}

export default CropPumpkin
