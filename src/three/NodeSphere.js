import { useRef, useMemo } from 'react'
import { useFrame, useLoader } from '@react-three/fiber'
import * as THREE from 'three'

export default function NodeSphere() {
  const points = useRef()

  // Load the logo texture
  const logoTexture = useLoader(THREE.TextureLoader, '/assets/logo_aigents_transparent.png')

  // Create point cloud shaped like a sphere
  const geometry = useMemo(() => {
    const geo = new THREE.BufferGeometry()
    const vertices = []
    const radius = 3.2

    for (let i = 0; i < 3000; i++) {
      const phi = Math.acos(2 * Math.random() - 1)
      const theta = 2 * Math.PI * Math.random()

      const x = radius * Math.sin(phi) * Math.cos(theta)
      const y = radius * Math.sin(phi) * Math.sin(theta)
      const z = radius * Math.cos(phi)

      vertices.push(x, y, z)
    }

    geo.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3))
    return geo
  }, [])

  // Animate point cloud
  useFrame(() => {
    if (points.current) {
      points.current.rotation.y += 0.001
      points.current.rotation.x += 0.0005
    }
  })

  return (
    <>
      {/* Orbiting cloud of points in a spherical shape */}
      <points ref={points} geometry={geometry}>
        <pointsMaterial
          color="#00C6C2"
          size={0.05}
          sizeAttenuation
          depthWrite={false}
        />
      </points>

      {/* Centered 3D logo plane (bigger) */}
      <mesh position={[0, 0, 0]}>
        <planeGeometry args={[5, 5]} />
        <meshBasicMaterial map={logoTexture} transparent />
      </mesh>
    </>
  )
}
