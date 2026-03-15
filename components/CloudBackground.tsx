"use client"

import { Canvas, useFrame } from "@react-three/fiber"
import { Points, PointMaterial, Line } from "@react-three/drei"
import { useMemo, useRef, useEffect, useState } from "react"
import * as THREE from "three"

function CloudParticles() {

  const ref = useRef<THREE.Points>(null!)

  const particles = useMemo(() => {

    const count = 2000
    const positions = new Float32Array(count * 3)

    for (let i = 0; i < count; i++) {

      positions[i * 3] = (Math.random() - 0.5) * 28
      positions[i * 3 + 1] = (Math.random() - 0.5) * 28
      positions[i * 3 + 2] = (Math.random() - 0.5) * 28

    }

    return positions

  }, [])

  useFrame(() => {

    if (ref.current) {
      ref.current.rotation.y += 0.0005
    }

  })

  return (
    <Points ref={ref} positions={particles} stride={3}>
      <PointMaterial
        transparent
        color="#60a5fa"
        size={0.03}
        sizeAttenuation
        depthWrite={false}
      />
    </Points>
  )

}

function DevOpsNetwork() {

  const group = useRef<THREE.Group>(null!)
  const mouse = useRef({ x: 0, y: 0 })
  const nodes = useMemo(() => {

    const arr: [number, number, number][] = []

    const width = 36
    const height = 18
    const depth = 24

    const count = 120

    for (let i = 0; i < count; i++) {

      const x = (Math.random() - 0.5) * width
      const y = (Math.random() - 0.5) * height
      const z = (Math.random() - 0.5) * depth

      arr.push([x, y, z])

    }

    return arr

  }, [])

  useEffect(() => {

    const move = (e: MouseEvent) => {

      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1
      mouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1

    }

    window.addEventListener("mousemove", move)

    return () => window.removeEventListener("mousemove", move)

  }, [])


  useFrame((_, delta) => {

    if (!group.current) return

    // slow rotation
    group.current.rotation.y += delta * 0.02

    // mouse parallax
    group.current.rotation.x += (mouse.current.y * 0.2 - group.current.rotation.x) * 0.02
    group.current.rotation.y += (mouse.current.x * 0.2 - group.current.rotation.y) * 0.02

  })

  return (
    <group ref={group}>

      {nodes.map((pos, i) => (
        <mesh key={i} position={pos}>
          <sphereGeometry args={[0.05, 12, 14]} />
          <meshStandardMaterial
            color="#3b82f6"
            emissive="#1d4ed8"
            emissiveIntensity={1.2}
          />
        </mesh>
      ))}

      {nodes.map((a, i) =>
        nodes.slice(i + 1).map((b, j) => {

          const distance =
            new THREE.Vector3(...a).distanceTo(new THREE.Vector3(...b))

          if (distance < 5.5) {
            return (
              <group key={`${i}-${j}`}>

                <Line
                  points={[a, b]}
                  color="#2563eb"
                  transparent
                  opacity={0.2}
                />

                {Math.random() > 0.7 && (
                  <DataPacket start={a} end={b} />
                )}

              </group>
            )
          }

          return null

        })
      )}

    </group>
  )

}

function DataPacket({ start, end }: { start: [number, number, number], end: [number, number, number] }) {

  const mesh = useRef<THREE.Mesh>(null!)
  const progress = useRef(Math.random())

  useFrame((_, delta) => {

    progress.current += delta * 0.3

    if (progress.current > 1) progress.current = 0

    const x = start[0] + (end[0] - start[0]) * progress.current
    const y = start[1] + (end[1] - start[1]) * progress.current
    const z = start[2] + (end[2] - start[2]) * progress.current

    mesh.current.position.set(x, y, z)

  })

  return (
    <mesh ref={mesh}>
      <sphereGeometry args={[0.04, 8, 8]} />
      <meshStandardMaterial
        color="#38bdf8"
        emissive="#38bdf8"
        emissiveIntensity={2}
      />
    </mesh>
  )
}


function DataFlow() {

  const ref = useRef<THREE.Mesh>(null!)

  useFrame((state) => {

    if (ref.current) {

      ref.current.position.x =
        Math.sin(state.clock.elapsedTime) * 2

    }

  })

  return (
    <mesh ref={ref} position={[0, 0, 0]}>
      <sphereGeometry args={[0.08, 16, 16]} />
      <meshBasicMaterial color="#38bdf8" />
    </mesh>
  )

}

export default function CloudBackground() {

  return (

    <div className="fixed inset-0 -z-10">
      
      <Canvas camera={{ position: [0, 0, 18], fov: 75 }}>

        <CloudParticles />

        <DevOpsNetwork />

        <DataFlow />

      </Canvas>

    </div>

  )

}