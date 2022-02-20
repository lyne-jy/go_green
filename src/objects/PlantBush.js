
import React from 'react'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { useLoader } from '@react-three/fiber'

const PlantBush = (props) => {
    const obj = useLoader(GLTFLoader, '/obj/plant_bush.glb')
    const txt = useLoader(TextureLoader, '/obj/plant_bush.png')

    return (
        <mesh position={props.position}>
            <primitive object={obj.scene.clone(true)} />
        </mesh>
    )
}

export default PlantBush
