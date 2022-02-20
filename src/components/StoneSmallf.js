
import React from 'react'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { useLoader } from '@react-three/fiber'

const StoneSmallf = (props) => {
    const obj = useLoader(GLTFLoader, '/obj/stone_smallF.glb')
    const txt = useLoader(TextureLoader, '/obj/stone_smallF.png')

    return (
        <mesh position={props.position}>
            <primitive object={obj.scene} map={txt} />
        </mesh>
    )
}

export default StoneSmallf
