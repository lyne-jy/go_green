
import React from 'react'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { useLoader } from '@react-three/fiber'

const BridgeStonenarrow = (props) => {
    const obj = useLoader(GLTFLoader, '/obj/bridge_stoneNarrow.glb')
    const txt = useLoader(TextureLoader, '/obj/bridge_stoneNarrow.png')

    return (
        <mesh position={props.position}>
            <primitive object={obj.scene} map={txt} />
        </mesh>
    )
}

export default BridgeStonenarrow
