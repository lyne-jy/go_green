
import React from 'react'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { useLoader } from '@react-three/fiber'

const StoneSmallflata = (props) => {
    const obj = useLoader(GLTFLoader, '/obj/stone_smallFlatA.glb')
    const txt = useLoader(TextureLoader, '/obj/stone_smallFlatA.png')

    return (
        <mesh position={props.position}>
            <primitive object={obj.scene.clone(true)} />
        </mesh>
    )
}

export default StoneSmallflata
