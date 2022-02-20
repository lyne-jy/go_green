
import React from 'react'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { useLoader } from '@react-three/fiber'

const PlantBushsmall = (props) => {
    const obj = useLoader(GLTFLoader, '/obj/plant_bushSmall.glb')
    const txt = useLoader(TextureLoader, '/obj/plant_bushSmall.png')

    return (
        <mesh position={props.position}>
            <primitive object={obj.scene} map={txt} />
        </mesh>
    )
}

export default PlantBushsmall
