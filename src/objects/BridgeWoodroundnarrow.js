
import React from 'react'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { useLoader } from '@react-three/fiber'

const BridgeWoodroundnarrow = (props) => {
    const obj = useLoader(GLTFLoader, '/obj/bridge_woodRoundNarrow.glb')
    const txt = useLoader(TextureLoader, '/obj/bridge_woodRoundNarrow.png')

    return (
        <mesh position={props.position}>
            <primitive object={obj.scene.clone(true)} />
        </mesh>
    )
}

export default BridgeWoodroundnarrow
