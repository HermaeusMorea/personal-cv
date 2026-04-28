"use client";

import { Float, Points, PointMaterial } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useEffect, useMemo, useRef } from "react";
import type { Group, Points as ThreePoints } from "three";
import { AdditiveBlending } from "three";

function seededNoise(seed: number) {
  return Math.sin(seed * 12.9898) * 43758.5453 % 1;
}

function createNetworkPositions(count: number) {
  const positions = new Float32Array(count * 3);
  for (let index = 0; index < count; index += 1) {
    const angle = index * 2.399963;
    const band = (index % 9) / 8 - 0.5;
    const radius = 1.15 + (index / count) * 2.35 + Math.abs(band) * 0.85;
    const drift = seededNoise(index + 3) * 0.42;

    positions[index * 3] = Math.cos(angle) * radius + Math.sin(index * 0.37) * 0.34;
    positions[index * 3 + 1] = band * 3.5 + Math.sin(angle * 0.65) * 0.42 + drift;
    positions[index * 3 + 2] = Math.sin(angle) * radius * 0.55 + Math.cos(index * 0.23) * 0.38;
  }
  return positions;
}

function createLinePositions(pointPositions: Float32Array) {
  const lines: number[] = [];
  const pointCount = pointPositions.length / 3;

  for (let index = 0; index < pointCount; index += 1) {
    let connections = 0;
    for (let next = index + 1; next < pointCount && connections < 2; next += 1) {
      const dx = pointPositions[index * 3] - pointPositions[next * 3];
      const dy = pointPositions[index * 3 + 1] - pointPositions[next * 3 + 1];
      const dz = pointPositions[index * 3 + 2] - pointPositions[next * 3 + 2];
      const distance = Math.sqrt(dx * dx + dy * dy + dz * dz);

      if (distance < 1.45 || (next === index + 4 && index % 5 === 0)) {
        lines.push(
          pointPositions[index * 3],
          pointPositions[index * 3 + 1],
          pointPositions[index * 3 + 2],
          pointPositions[next * 3],
          pointPositions[next * 3 + 1],
          pointPositions[next * 3 + 2],
        );
        connections += 1;
      }
    }
  }

  return new Float32Array(lines);
}

function AgentGraph() {
  const groupRef = useRef<Group>(null);
  const pointsRef = useRef<ThreePoints>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const positions = useMemo(() => createNetworkPositions(128), []);
  const linePositions = useMemo(() => createLinePositions(positions), [positions]);

  useEffect(() => {
    function handlePointerMove(event: PointerEvent) {
      mouseRef.current.x = (event.clientX / window.innerWidth - 0.5) * 2;
      mouseRef.current.y = (event.clientY / window.innerHeight - 0.5) * 2;
    }

    window.addEventListener("pointermove", handlePointerMove);
    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, []);

  useFrame(({ clock }, delta) => {
    const elapsed = clock.getElapsedTime();
    if (groupRef.current) {
      groupRef.current.rotation.x += ((-mouseRef.current.y * 0.11 + Math.sin(elapsed * 0.18) * 0.025) - groupRef.current.rotation.x) * Math.min(delta * 2.8, 1);
      groupRef.current.rotation.y += ((mouseRef.current.x * 0.16 + elapsed * 0.018) - groupRef.current.rotation.y) * Math.min(delta * 2.4, 1);
      groupRef.current.position.x += (mouseRef.current.x * 0.18 - groupRef.current.position.x) * Math.min(delta * 2, 1);
      groupRef.current.position.y += (-mouseRef.current.y * 0.12 - groupRef.current.position.y) * Math.min(delta * 2, 1);
    }
    if (pointsRef.current) {
      pointsRef.current.rotation.z = Math.sin(elapsed * 0.15) * 0.035;
    }
  });

  return (
    <group ref={groupRef}>
      <Float speed={0.9} rotationIntensity={0.04} floatIntensity={0.22}>
        <Points ref={pointsRef} positions={positions} stride={3} frustumCulled>
          <PointMaterial
            transparent
            color="#7dd3fc"
            size={0.03}
            sizeAttenuation
            depthWrite={false}
            opacity={0.78}
          />
        </Points>
        <lineSegments>
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              args={[linePositions, 3]}
              count={linePositions.length / 3}
              array={linePositions}
              itemSize={3}
            />
          </bufferGeometry>
          <lineBasicMaterial
            color="#86efac"
            transparent
            opacity={0.14}
            blending={AdditiveBlending}
            depthWrite={false}
          />
        </lineSegments>
      </Float>
    </group>
  );
}

type AgentGraphBackgroundProps = {
  className?: string;
};

export function AgentGraphBackground({ className = "absolute inset-0" }: AgentGraphBackgroundProps) {
  return (
    <div className={`pointer-events-none ${className}`}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(125,211,252,0.16),transparent_34rem)]" />
      <Canvas camera={{ position: [0, 0, 6], fov: 58 }} dpr={[1, 1.6]}>
        <ambientLight intensity={0.8} />
        <AgentGraph />
      </Canvas>
      <div className="absolute inset-0 bg-gradient-to-b from-ink-950/20 via-ink-950/20 to-ink-950" />
    </div>
  );
}
