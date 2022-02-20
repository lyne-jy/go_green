import React from 'react';
import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'

import Box from "../components/Box";



const Forest = () => {
  return (
      <Suspense fallback={<span>loading...</span>}>
          <Canvas dpr={[1, 2]} camera={{ fov: 45, position: [-4, 2, -4] }}>
              <color attach="background" args={['#1e2243']} />
              <Box />
          </Canvas>
      </Suspense>
  )
}

export default Forest