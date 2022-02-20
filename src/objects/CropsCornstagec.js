
import React from 'react'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { useLoader } from '@react-three/fiber'

const CropsCornstagec = (props) => {
    const obj = useLoader(GLTFLoader, '/obj/crops_cornStageC.glb')
    const txt = useLoader(TextureLoader, '/obj/crops_cornStageC.png')

    return (
        <mesh position={props.position}>
            <primitive object={obj.scene} map={txt} />
        </mesh>
    )
}

export default CropsCornstagec