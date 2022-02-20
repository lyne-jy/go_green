
import React from 'react'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { useLoader } from '@react-three/fiber'

const StoneSmallg = (props) => {
    const obj = useLoader(GLTFLoader, '/obj/stone_smallG.glb')
    const txt = useLoader(TextureLoader, '/obj/stone_smallG.png')

    return (
        <mesh position={props.position}>
            <primitive object={obj.scene} map={txt} />
        </mesh>
    )
}

export default StoneSmallg
