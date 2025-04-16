/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react"
import { useRef } from "react"
import {useFrame} from "@react-three/fiber"
import {easing} from 'maath'

const HeroCamera = ({ children, isMobile }) => {
  
    const groupRef = useRef();
    
    useFrame((state,delta) => {
        easing.damp3(state.camera.position, [0,0,20], 0.25, delta);
        
        
        easing.dampE(groupRef.current.rotation, [state.pointer.y/7, -state.pointer.x/5, 0], .25, delta);


    })
    
    return (
        <group ref = {groupRef} scale={isMobile ? 1: 1.3}>
            {children}
        </group>
    )
}

export default HeroCamera