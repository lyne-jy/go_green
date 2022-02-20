
import React from 'react'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { useLoader } from '@react-three/fiber'

const CampfireStones = (props) => {
    const obj = useLoader(GLTFLoader, '/obj/campfire_stones.glb')
    const txt = useLoader(TextureLoader, '/obj/campfire_stones.png')

    return (
        <mesh position={props.position}>
            <primitive object={obj.scene.clone(true)} />
        </mesh>
    )
}

export default CampfireStones
