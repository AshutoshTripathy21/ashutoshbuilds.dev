"use client"

import { Canvas, useFrame } from "@react-three/fiber"
import { useMemo, useRef, useEffect, useState } from "react"
import * as THREE from "three"

function StarCloud({ isMobile }: { isMobile: boolean }) {
  const ref = useRef<THREE.Points>(null!)
  const count = isMobile ? 800 : 1800

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 36
      pos[i * 3 + 1] = (Math.random() - 0.5) * 36
      pos[i * 3 + 2] = (Math.random() - 0.5) * 36
    }
    return pos
  }, [count])

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta * 0.003
      ref.current.rotation.x += delta * 0.001
    }
  })

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={isMobile ? 0.025 : 0.02}
        color="#63c5ff"
        transparent
        opacity={0.5}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  )
}

function DevOpsNetwork({ isMobile }: { isMobile: boolean }) {
  const group = useRef<THREE.Group>(null!)
  const linesRef = useRef<THREE.LineSegments>(null!)
  const packetsRef = useRef<THREE.InstancedMesh>(null!)
  const nodeMeshRef = useRef<THREE.InstancedMesh>(null!)
  const mouse = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 })

  const nodeCount = isMobile ? 40 : 70
  const maxDistance = isMobile ? 5.2 : 5.8
  const maxPackets = isMobile ? 14 : 24

  const bounds = useMemo(() => ({
    x: isMobile ? 12 : 18,
    y: isMobile ? 8 : 11,
    z: isMobile ? 8 : 12,
  }), [isMobile])

  // Initialize node positions & slow drifting velocities
  const nodes = useMemo(() => {
    const list: { pos: THREE.Vector3; vel: THREE.Vector3 }[] = []
    for (let i = 0; i < nodeCount; i++) {
      list.push({
        pos: new THREE.Vector3(
          (Math.random() - 0.5) * bounds.x * 1.8,
          (Math.random() - 0.5) * bounds.y * 1.8,
          (Math.random() - 0.5) * bounds.z * 1.8
        ),
        vel: new THREE.Vector3(
          (Math.random() - 0.5) * 0.06,
          (Math.random() - 0.5) * 0.06,
          (Math.random() - 0.5) * 0.06
        ),
      })
    }
    return list
  }, [nodeCount, bounds])

  // Connection data structure for rendering lines & packet trajectories
  const connections = useMemo(() => {
    const list: { i: number; j: number; speed: number; progress: number }[] = []
    for (let i = 0; i < nodeCount; i++) {
      for (let j = i + 1; j < nodeCount; j++) {
        const dist = nodes[i].pos.distanceTo(nodes[j].pos)
        if (dist < maxDistance && list.length < maxPackets) {
          list.push({
            i,
            j,
            speed: 0.2 + Math.random() * 0.3,
            progress: Math.random(),
          })
        }
      }
    }
    return list
  }, [nodeCount, maxDistance, maxPackets, nodes])

  // Pre-allocated buffers & helpers
  const dummy = useMemo(() => new THREE.Object3D(), [])
  const linePosBuffer = useMemo(() => new Float32Array(nodeCount * nodeCount * 6), [nodeCount])

  const groupVel = useRef({ x: 0.14, y: 0.09, z: 0.04 })

  // Dynamic animation frame loop
  useFrame((_, delta) => {
    if (!group.current) return

    // 1. Translation / Movement of the Whole Cluster with Velocity & Boundary Bounce
    group.current.position.x += groupVel.current.x * delta
    group.current.position.y += groupVel.current.y * delta
    group.current.position.z += groupVel.current.z * delta

    if (Math.abs(group.current.position.x) > 4.5) groupVel.current.x *= -1
    if (Math.abs(group.current.position.y) > 3.0) groupVel.current.y *= -1
    if (Math.abs(group.current.position.z) > 2.5) groupVel.current.z *= -1

    // 2. Slow & Smooth Rotation of the Whole Cluster Group
    group.current.rotation.y += delta * 0.018
    group.current.rotation.x += delta * 0.009
    group.current.rotation.z += delta * 0.004

    // 3. Subtle Interactive Mouse Parallax Tilt
    mouse.current.x += (mouse.current.targetX - mouse.current.x) * 0.015
    mouse.current.y += (mouse.current.targetY - mouse.current.y) * 0.015
    group.current.rotation.x += (mouse.current.y * 0.05 - group.current.rotation.x) * 0.01
    group.current.rotation.y += (mouse.current.x * 0.05 - group.current.rotation.y) * 0.01

    // 2. Node Position Slow Drift & Boundary Bounce
    nodes.forEach((node, idx) => {
      node.pos.x += node.vel.x * delta
      node.pos.y += node.vel.y * delta
      node.pos.z += node.vel.z * delta

      if (Math.abs(node.pos.x) > bounds.x) node.vel.x *= -1
      if (Math.abs(node.pos.y) > bounds.y) node.vel.y *= -1
      if (Math.abs(node.pos.z) > bounds.z) node.vel.z *= -1

      if (nodeMeshRef.current) {
        dummy.position.copy(node.pos)
        dummy.scale.setScalar(1)
        dummy.updateMatrix()
        nodeMeshRef.current.setMatrixAt(idx, dummy.matrix)
      }
    })

    if (nodeMeshRef.current) {
      nodeMeshRef.current.instanceMatrix.needsUpdate = true
    }

    // 3. Dynamic Connection Line Updates
    if (linesRef.current) {
      let lineIdx = 0
      for (let i = 0; i < nodeCount; i++) {
        for (let j = i + 1; j < nodeCount; j++) {
          const dist = nodes[i].pos.distanceTo(nodes[j].pos)
          if (dist < maxDistance) {
            linePosBuffer[lineIdx++] = nodes[i].pos.x
            linePosBuffer[lineIdx++] = nodes[i].pos.y
            linePosBuffer[lineIdx++] = nodes[i].pos.z
            linePosBuffer[lineIdx++] = nodes[j].pos.x
            linePosBuffer[lineIdx++] = nodes[j].pos.y
            linePosBuffer[lineIdx++] = nodes[j].pos.z
          }
        }
      }

      const geom = linesRef.current.geometry
      const attr = geom.attributes.position as THREE.BufferAttribute
      if (attr) {
        attr.array.set(linePosBuffer.subarray(0, lineIdx))
        attr.needsUpdate = true
        geom.setDrawRange(0, lineIdx / 3)
      }
    }

    // 4. Data Packet Trajectory Motion (Slow)
    if (packetsRef.current) {
      connections.forEach((conn, i) => {
        conn.progress += delta * conn.speed * 0.18
        if (conn.progress > 1) conn.progress = 0

        const startPos = nodes[conn.i].pos
        const endPos = nodes[conn.j].pos
        dummy.position.lerpVectors(startPos, endPos, conn.progress)

        const scale = 0.5 + Math.sin(conn.progress * Math.PI) * 0.5
        dummy.scale.set(scale, scale, scale)
        dummy.updateMatrix()
        packetsRef.current.setMatrixAt(i, dummy.matrix)
      })
      packetsRef.current.instanceMatrix.needsUpdate = true
    }
  })

  return (
    <group ref={group}>
      {/* Network Nodes */}
      <instancedMesh
        ref={nodeMeshRef}
        args={[undefined, undefined, nodeCount]}
      >
        <sphereGeometry args={[0.035, 10, 10]} />
        <meshStandardMaterial
          color="#388bfd"
          emissive="#2563eb"
          emissiveIntensity={1.8}
          roughness={0.2}
        />
      </instancedMesh>

      {/* Network Connections */}
      <lineSegments ref={linesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[linePosBuffer, 3]}
          />
        </bufferGeometry>
        <lineBasicMaterial
          color="#2563eb"
          transparent
          opacity={0.25}
        />
      </lineSegments>

      {/* Data Packets */}
      <instancedMesh
        ref={packetsRef}
        args={[undefined, undefined, connections.length]}
      >
        <sphereGeometry args={[0.025, 8, 8]} />
        <meshBasicMaterial color="#63c5ff" />
      </instancedMesh>
    </group>
  )
}

export default function CloudBackground() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  return (
    <div className="fixed inset-0 -z-10 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 18], fov: 75 }}
        gl={{ powerPreference: "high-performance", antialias: true }}
        dpr={[1, 2]}
      >
        <ambientLight intensity={0.5} />
        <StarCloud isMobile={isMobile} />
        <DevOpsNetwork isMobile={isMobile} />
      </Canvas>
    </div>
  )
}