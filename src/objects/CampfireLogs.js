
import React from 'react'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { useLoader } from '@react-three/fiber'

const CampfireLogs = (props) => {
    const obj = useLoader(GLTFLoader, '/obj/campfire_logs.glb')
    const txt = useLoader(TextureLoader, '/obj/campfire_logs.png')

    return (
        <mesh position={props.position}>
            <primitive object={obj.scene} map={txt} />
        </mesh>
    )
}

export default CampfireLogs
