
import React from 'react'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { useLoader } from '@react-three/fiber'

const MushroomTantall = (props) => {
    const obj = useLoader(GLTFLoader, '/obj/mushroom_tanTall.glb')
    const txt = useLoader(TextureLoader, '/obj/mushroom_tanTall.png')

    return (
        <mesh position={props.position}>
            <primitive object={obj.scene} map={txt} />
        </mesh>
    )
}

export default MushroomTantall
