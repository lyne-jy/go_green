
import React from 'react'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { useLoader } from '@react-three/fiber'

const CropsDirtdoublerow = (props) => {
    const obj = useLoader(GLTFLoader, '/obj/crops_dirtDoubleRow.glb')
    const txt = useLoader(TextureLoader, '/obj/crops_dirtDoubleRow.png')

    return (
        <mesh position={props.position}>
            <primitive object={obj.scene} map={txt} />
        </mesh>
    )
}

export default CropsDirtdoublerow
