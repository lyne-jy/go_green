
import React from 'react'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { useLoader } from '@react-three/fiber'

const CropsCornstaged = (props) => {
    const obj = useLoader(GLTFLoader, '/obj/crops_cornStageD.glb')
    const txt = useLoader(TextureLoader, '/obj/crops_cornStageD.png')

    return (
        <mesh position={props.position}>
            <primitive object={obj.scene.clone(true)} />
        </mesh>
    )
}

export default CropsCornstaged
