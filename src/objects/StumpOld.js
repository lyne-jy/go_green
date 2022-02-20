
import React from 'react'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { useLoader } from '@react-three/fiber'

const StumpOld = (props) => {
    const obj = useLoader(GLTFLoader, '/obj/stump_old.glb')
    const txt = useLoader(TextureLoader, '/obj/stump_old.png')

    return (
        <mesh position={props.position}>
            <primitive object={obj.scene} map={txt} />
        </mesh>
    )
}

export default StumpOld
