
import React from 'react'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { useLoader } from '@react-three/fiber'

const CliffBlockslopehalfwallsRock = (props) => {
    const obj = useLoader(GLTFLoader, '/obj/cliff_blockSlopeHalfWalls_rock.glb')
    const txt = useLoader(TextureLoader, '/obj/cliff_blockSlopeHalfWalls_rock.png')

    return (
        <mesh position={props.position}>
            <primitive object={obj.scene.clone(true)} />
        </mesh>
    )
}

export default CliffBlockslopehalfwallsRock
