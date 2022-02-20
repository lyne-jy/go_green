
import React from 'react'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { useLoader } from '@react-three/fiber'

const BedFloor = (props) => {
    const obj = useLoader(GLTFLoader, '/obj/bed_floor.glb')
    const txt = useLoader(TextureLoader, '/obj/bed_floor.png')

    return (
        <mesh position={props.position}>
            <primitive object={obj.scene.clone(true)} />
        </mesh>
    )
}

export default BedFloor
