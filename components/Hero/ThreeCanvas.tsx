'use client'

import { useRef, useMemo, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

function ParticleField() {
  const pointsRef = useRef<THREE.Points>(null)
  const mouseRef = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      mouseRef.current = {
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: -(e.clientY / window.innerHeight) * 2 + 1,
      }
    }
    window.addEventListener('mousemove', onMouseMove)
    return () => window.removeEventListener('mousemove', onMouseMove)
  }, [])

  const { positions, colors } = useMemo(() => {
    const count = 1800
    const pos = new Float32Array(count * 3)
    const col = new Float32Array(count * 3)
    const cyan = new THREE.Color('#00D9FF')
    const blue = new THREE.Color('#4F8EF7')
    const white = new THREE.Color('#aabbcc')

    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 22
      pos[i * 3 + 1] = (Math.random() - 0.5) * 14
      pos[i * 3 + 2] = (Math.random() - 0.5) * 8

      const mix = Math.random()
      const c = mix < 0.33 ? cyan : mix < 0.66 ? blue : white
      col[i * 3] = c.r
      col[i * 3 + 1] = c.g
      col[i * 3 + 2] = c.b
    }
    return { positions: pos, colors: col }
  }, [])

  useFrame((state) => {
    if (!pointsRef.current) return
    const t = state.clock.elapsedTime
    pointsRef.current.rotation.y = t * 0.04 + mouseRef.current.x * 0.15
    pointsRef.current.rotation.x = t * 0.015 + mouseRef.current.y * 0.08
    pointsRef.current.position.x +=
      (mouseRef.current.x * 0.5 - pointsRef.current.position.x) * 0.04
    pointsRef.current.position.y +=
      (mouseRef.current.y * 0.3 - pointsRef.current.position.y) * 0.04
  })

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
        <bufferAttribute
          attach="attributes-color"
          args={[colors, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.06}
        vertexColors
        transparent
        opacity={0.75}
        sizeAttenuation
      />
    </points>
  )
}

export default function ThreeCanvas() {
  return (
    <div className="hero-canvas-container" aria-hidden="true">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 60 }}
        gl={{ antialias: false, alpha: true }}
        dpr={[1, 1.5]}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.5} />
        <ParticleField />
      </Canvas>
    </div>
  )
}
