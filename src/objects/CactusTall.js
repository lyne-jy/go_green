
import React from 'react'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { useLoader } from '@react-three/fiber'

const CactusTall = (props) => {
    const obj = useLoader(GLTFLoader, '/obj/cactus_tall.glb')
    const txt = useLoader(TextureLoader, '/obj/cactus_tall.png')

    return (
        <mesh position={props.position}>
            <primitive object={obj.scene} map={txt} />
        </mesh>
    )
}

export default CactusTall
