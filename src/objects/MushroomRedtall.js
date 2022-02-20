
import React from 'react'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { useLoader } from '@react-three/fiber'

const MushroomRedtall = (props) => {
    const obj = useLoader(GLTFLoader, '/obj/mushroom_redTall.glb')
    const txt = useLoader(TextureLoader, '/obj/mushroom_redTall.png')

    return (
        <mesh position={props.position}>
            <primitive object={obj.scene.clone(true)} />
        </mesh>
    )
}

export default MushroomRedtall
