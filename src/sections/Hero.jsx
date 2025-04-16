//import { Leva, useControls } from 'leva'
//import HackerRoom from '../components/HackerRoom'
//import Button from '../components/Button.jsx'


import React, { Suspense } from 'react'
import {Canvas} from "@react-three/fiber"
import { PerspectiveCamera } from '@react-three/drei'
import CanvasLoader from '../components/CanvasLoader'
import { useMediaQuery } from 'react-responsive'
import { calculateSizes } from '../constants/index.js'
import HeroCamera from '../components/HeroCamera.jsx'
import Beach from '../components/Beach'


const Hero = () => {

  /*
  const x = useControls('Beach', {
    positionX: {
      value: 2.5,
      min: -10,
      max: 10,
    },
    positionY: {
      value: 2.5,
      min: -10,
      max: 10,
    },
    positionZ: {
      value: 2.5,
      min: -10,
      max: 10,
    },
    rotationX: {
      value: 2.5,
      min: -10,
      max: 10,
    },
    rotationY: {
      value: 2.5,
      min: -10,
      max: 10,
    },
    rotationZ: {
      value: 2.5,
      min: -10,
      max: 10,
    },
    scale: {
      value: 1,
      min: 0.1,
      max: 10
    }
  }) 
  */
  

  const isSmall = useMediaQuery({maxWidth: 440});
  const isMobile = useMediaQuery({maxWidth:768});
 

  const sizes = calculateSizes(isSmall, isMobile);

  return (
    <section className='min-h-screen w-full flex flex-col relative' id="home">
        <div className='w-full mx-auto flex flex-col sm:mt-32 mt-20 c-space gap-3'>
            <p className='sm:text-2xl text-1xl font-medium text-black text-center font-generalsans'>
                Welcome to My Portfolio! <span className='waving-hand'>👋</span>
            </p>
            <p className='hero_tag text-black_gradient'>Developing Software Solutions & Securing Networks</p>
        </div>

        

        <div className='w-full h-full absolute inset-0'>
            {/*<Leva />*/}
            <Canvas className='w-full h-full'>
              <Suspense fallback={<CanvasLoader />}>
                <PerspectiveCamera makeDefault position={[0,0,20]} />

                <HeroCamera isMobile={isMobile}>

                  <Beach 
                    scale = {sizes.beachScale} 
                    position={sizes.beachPosition} 
                    rotation={[0, -Math.PI, 0]}
                    />


                </HeroCamera>
    
    
                <ambientLight intensity={1} />
                <directionalLight position={[10,10,10]} intensity = {0.5} />
              </Suspense>
            </Canvas>
        </div>
        
    </section>
  )
}

export default Hero


/*
<div className = "absolute bottom-1 left-0 right-0 w-full z-10 c-space">
          <a href="#about" className='w-fit'>
            <Button name="Get to Know Me" isBeam containerClass="sm:w-fit w-full sm:min-w-96" />
          </a>

        </div>

*/


/*

<HackerRoom 
                  scale = {sizes.deskScale} 
                  position={sizes.deskPosition} 
                  rotation={[0, -Math.PI, 0]}
                  //position={[x.positionX,x.positionY,x.positionZ]} 
                  //rotation={[x.rotationX, x.rotationY, x.rotationZ]}  
                  //scale={[x.scale, x.scale, x.scale]}
                  />


*/





