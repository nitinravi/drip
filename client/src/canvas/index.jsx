import React from 'react'
import { Canvas } from '@react-three/fiber'
import { Environment, Center, Stage } from '@react-three/drei'
import Shirt from './Shirt'
import Backdrop from './Backdrop'
import CameraRig from './CameraRig'

const CanvasModel = () => {
  return (
    <Canvas
      shadows
      //Size of model changes perspective of camera
      camera={{ position: [0, 0, 0], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
      className="w-full max-w-full h-full transition-all ease-in"
    >
      <ambientLight intensity={0.5} />
      <Stage environment={null}>
        {/* Changed environment to null cause preset causing cdn unable to load error */}
        <CameraRig>
          <Backdrop />
          <Center>
            <Shirt />
          </Center>
        </CameraRig>
      </Stage>
    </Canvas>
  )
}

export default CanvasModel
