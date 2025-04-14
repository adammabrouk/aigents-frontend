import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export default function NodeSphere() {
  const points = useRef()

  const geometry = useMemo(() => {
    const geo = new THREE.BufferGeometry()
    const vertices = []
    for (let i = 0; i < 3000; i++) {
      const x = THREE.MathUtils.randFloatSpread(5)
      const y = THREE.MathUtils.randFloatSpread(5)
      const z = THREE.MathUtils.randFloatSpread(5)
      vertices.push(x, y, z)
    }
    geo.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3))
    return geo
  }, [])

  useFrame(() => {
    if (points.current) {
      points.current.rotation.y += 0.001
      points.current.rotation.x += 0.0005
    }
  })

  return (
    <points ref={points} geometry={geometry}>
      <pointsMaterial
        color="#00C6C2"
        size={0.05}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  )
}
