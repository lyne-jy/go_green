
import React from 'react'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { useLoader } from '@react-three/fiber'

const PlantBushlarge = (props) => {
    const obj = useLoader(GLTFLoader, '/obj/plant_bushLarge.glb')
    const txt = useLoader(TextureLoader, '/obj/plant_bushLarge.png')

    return (
        <mesh position={props.position}>
            <primitive object={obj.scene} map={txt} />
        </mesh>
    )
}

export default PlantBushlarge
