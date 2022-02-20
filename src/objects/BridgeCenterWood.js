
import React from 'react'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { useLoader } from '@react-three/fiber'

const BridgeCenterWood = (props) => {
    const obj = useLoader(GLTFLoader, '/obj/bridge_center_wood.glb')
    const txt = useLoader(TextureLoader, '/obj/bridge_center_wood.png')

    return (
        <mesh position={props.position}>
            <primitive object={obj.scene.clone(true)} />
        </mesh>
    )
}

export default BridgeCenterWood
