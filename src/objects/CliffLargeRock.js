
import React from 'react'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { useLoader } from '@react-three/fiber'

const CliffLargeRock = (props) => {
    const obj = useLoader(GLTFLoader, '/obj/cliff_large_rock.glb')
    const txt = useLoader(TextureLoader, '/obj/cliff_large_rock.png')

    return (
        <mesh position={props.position}>
            <primitive object={obj.scene} map={txt} />
        </mesh>
    )
}

export default CliffLargeRock
