import React from 'react'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { useLoader } from '@react-three/fiber'

const BridgeCenterWood = () => {
    const obj = useLoader(GLTFLoader, '/obj/bridge_center_wood.glb')
    const txt = useLoader(TextureLoader, '/obj/bridge_center_wood.png')

    return <primitive object={obj.scene} map={txt} />
}

export default BridgeCenterWood
