import { useRef, useMemo, Suspense } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Stars } from '@react-three/drei';
import * as THREE from 'three';

/* ---- Responsive scale hook ---- */
function useResponsiveScale() {
  const { viewport } = useThree();
  return Math.min(viewport.width / 8, 1);
}

/* ---- Individual floating shape ---- */
function CosmicShape({
  geometry,
  position,
  color,
  distort = 0.3,
  speed = 0.6,
  opacity = 0.7,
  floatSpeed = 2,
  floatIntensity = 1,
  rotationFactor = 1,
}) {
  const meshRef = useRef();
  const scale = useResponsiveScale();

  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.15 * rotationFactor;
      meshRef.current.rotation.y += delta * 0.2 * rotationFactor;
    }
  });

  const scaledPos = useMemo(
    () => [position[0] * scale, position[1] * scale, position[2]],
    [position, scale]
  );

  return (
    <Float speed={floatSpeed} rotationIntensity={0.4} floatIntensity={floatIntensity}>
      <mesh ref={meshRef} position={scaledPos} scale={scale}>
        {geometry}
        <MeshDistortMaterial
          color={color}
          transparent
          opacity={opacity}
          distort={distort}
          speed={speed}
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>
    </Float>
  );
}

/* ---- Scene contents ---- */
function SceneContents() {
  return (
    <>
      {/* Lighting */}
      <ambientLight intensity={0.3} />
      <pointLight position={[5, 5, 5]} color="#00e5ff" intensity={1.5} />
      <pointLight position={[-5, -3, 3]} color="#a855f7" intensity={0.6} />

      {/* Background stars */}
      <Stars
        radius={60}
        depth={50}
        count={1000}
        factor={4}
        saturation={0}
        fade
        speed={0.5}
      />

      {/* 1. Large Icosahedron — cyan */}
      <CosmicShape
        geometry={<icosahedronGeometry args={[1.2, 1]} />}
        position={[-2, 1, 0]}
        color="#00e5ff"
        distort={0.35}
        speed={0.8}
        opacity={0.6}
        floatSpeed={1.5}
        floatIntensity={1.2}
        rotationFactor={0.8}
      />

      {/* 2. Torus Knot — violet */}
      <CosmicShape
        geometry={<torusKnotGeometry args={[0.6, 0.2, 100, 16]} />}
        position={[2.5, -0.5, -1]}
        color="#a855f7"
        distort={0.25}
        speed={0.5}
        opacity={0.7}
        floatSpeed={2}
        floatIntensity={1}
        rotationFactor={1.2}
      />

      {/* 3. Octahedron — pink */}
      <CosmicShape
        geometry={<octahedronGeometry args={[0.8, 0]} />}
        position={[-3, -1.5, -2]}
        color="#ec4899"
        distort={0.3}
        speed={0.6}
        opacity={0.65}
        floatSpeed={1.8}
        floatIntensity={0.8}
        rotationFactor={1}
      />

      {/* 4. Small sphere — cyan */}
      <CosmicShape
        geometry={<sphereGeometry args={[0.4, 32, 32]} />}
        position={[3, 2, -1]}
        color="#00e5ff"
        distort={0.4}
        speed={1}
        opacity={0.75}
        floatSpeed={3}
        floatIntensity={1.5}
        rotationFactor={0.5}
      />

      {/* 5. Dodecahedron — violet */}
      <CosmicShape
        geometry={<dodecahedronGeometry args={[0.5, 0]} />}
        position={[0, -2, -3]}
        color="#a855f7"
        distort={0.28}
        speed={0.4}
        opacity={0.6}
        floatSpeed={1.2}
        floatIntensity={0.6}
        rotationFactor={0.7}
      />
    </>
  );
}

/* ---- Main exported component ---- */
const HeroScene = () => {
  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        zIndex: 1,
        pointerEvents: 'none',
      }}
    >
      <Canvas
        camera={{ position: [0, 0, 5], fov: 60 }}
        dpr={[1, 1.5]}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: 'high-performance',
        }}
        style={{ background: 'transparent' }}
        fallback={<div />}
      >
        <Suspense fallback={null}>
          <SceneContents />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default HeroScene;
