
import React from 'react'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { useLoader } from '@react-three/fiber'

const CropsLeafsstageb = (props) => {
    const obj = useLoader(GLTFLoader, '/obj/crops_leafsStageB.glb')
    const txt = useLoader(TextureLoader, '/obj/crops_leafsStageB.png')

    return (
        <mesh position={props.position}>
            <primitive object={obj.scene.clone(true)} />
        </mesh>
    )
}

export default CropsLeafsstageb
