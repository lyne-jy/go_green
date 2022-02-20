
import React from 'react'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { useLoader } from '@react-three/fiber'

const CliffBlockslopeStone = (props) => {
    const obj = useLoader(GLTFLoader, '/obj/cliff_blockSlope_stone.glb')
    const txt = useLoader(TextureLoader, '/obj/cliff_blockSlope_stone.png')

    return (
        <mesh position={props.position}>
            <primitive object={obj.scene} map={txt} />
        </mesh>
    )
}

export default CliffBlockslopeStone
