
import React from 'react'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { useLoader } from '@react-three/fiber'

const PlantFlatshort = (props) => {
    const obj = useLoader(GLTFLoader, '/obj/plant_flatShort.glb')
    const txt = useLoader(TextureLoader, '/obj/plant_flatShort.png')

    return (
        <mesh position={props.position}>
            <primitive object={obj.scene.clone(true)} />
        </mesh>
    )
}

export default PlantFlatshort
