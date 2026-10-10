import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { useReducedMotion } from "framer-motion";
import type { Mesh } from "three";

function GlassOrb() {
  const meshRef = useRef<Mesh>(null);
  const reduceMotion = useReducedMotion();

  useFrame((state, delta) => {
    if (!meshRef.current || reduceMotion) return;
    meshRef.current.rotation.y += delta * 0.18;
    meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.28) * 0.08;
  });

  return (
    <mesh ref={meshRef} scale={1.35} rotation={[0.2, -0.4, 0.1]}>
      <icosahedronGeometry args={[1.4, 4]} />
      <meshPhysicalMaterial
        color="#a78bfa"
        roughness={0.08}
        metalness={0.12}
        transmission={1}
        thickness={0.8}
        ior={1.46}
        clearcoat={1}
        clearcoatRoughness={0.08}
        attenuationColor="#67e8f9"
        attenuationDistance={2.8}
        transparent
        opacity={0.78}
      />
    </mesh>
  );
}

export function GlassHeroScene() {
  const reduceMotion = useReducedMotion();
  if (reduceMotion) return null;

  return (
    <div className="glass-hero-scene" aria-hidden="true">
      <Canvas
        dpr={[1, 2]}
        frameloop="always"
        camera={{ position: [0, 0, 4.8], fov: 36 }}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      >
        <ambientLight intensity={0.45} />
        <pointLight position={[2.8, 2.4, 3]} intensity={16} distance={8} color="#67e8f9" />
        <pointLight position={[-2.5, -1.5, 2]} intensity={12} distance={7} color="#a78bfa" />
        <GlassOrb />
      </Canvas>
    </div>
  );
}
