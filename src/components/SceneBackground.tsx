import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import { useMemo, useRef, useState, useEffect } from "react";
import * as THREE from "three";

// Shared smooth scroll progress (0..1)
const scrollState = { target: 0, current: 0 };

function useSmoothScroll() {
  useFrame((_, delta) => {
    const max = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
    scrollState.target = Math.min(1, Math.max(0, window.scrollY / max));
    // critically damped lerp — smooth easing
    const k = 1 - Math.pow(0.001, delta);
    scrollState.current += (scrollState.target - scrollState.current) * k;
  });
}

function Scene() {
  useSmoothScroll();

  const pointsRef = useRef<THREE.Points>(null);
  const meshRef = useRef<THREE.Mesh>(null);
  const icoRef = useRef<THREE.Mesh>(null);
  const ringRef = useRef<THREE.Mesh>(null);
  const groupRef = useRef<THREE.Group>(null);

  const positions = useMemo(() => {
    const count = 2200;
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r = 1.2 + Math.random() * 2.8;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      arr[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      arr[i * 3 + 2] = r * Math.cos(phi);
    }
    return arr;
  }, []);

  // Smoothed pointer
  const pointer = useRef({ x: 0, y: 0 });

  useFrame((state, delta) => {
    const p = scrollState.current;
    pointer.current.x += (state.pointer.x - pointer.current.x) * Math.min(1, delta * 3);
    pointer.current.y += (state.pointer.y - pointer.current.y) * Math.min(1, delta * 3);

    if (groupRef.current) {
      // gentle scroll-driven rotation/translation
      groupRef.current.rotation.y = p * Math.PI * 0.8 + pointer.current.x * 0.15;
      groupRef.current.rotation.x = p * 0.6 + pointer.current.y * -0.1;
      groupRef.current.position.y = -p * 1.2;
    }

    if (pointsRef.current) {
      pointsRef.current.rotation.y += delta * 0.04;
      const s = 1 - p * 0.85;
      pointsRef.current.scale.setScalar(Math.max(0.001, s));
      const mat = pointsRef.current.material as THREE.PointsMaterial;
      mat.opacity = Math.max(0, 1 - p * 1.4);
      mat.transparent = true;
    }

    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.18;
      meshRef.current.rotation.y += delta * 0.12;
      const s = 0.2 + p * 1.0;
      meshRef.current.scale.setScalar(s);
      const mat = meshRef.current.material as THREE.MeshStandardMaterial;
      mat.opacity = Math.min(1, p * 1.6);
      mat.transparent = true;
    }

    if (icoRef.current) {
      const t = state.clock.elapsedTime;
      icoRef.current.rotation.x = t * 0.25;
      icoRef.current.rotation.y = t * 0.35;
      icoRef.current.position.x = Math.sin(t * 0.4) * 2.4;
      icoRef.current.position.y = Math.cos(t * 0.3) * 1.4 - p * 0.6;
      icoRef.current.position.z = -1.5 + Math.sin(t * 0.5) * 0.8;
      const mat = icoRef.current.material as THREE.MeshStandardMaterial;
      mat.opacity = 0.6 - p * 0.3;
      mat.transparent = true;
    }

    if (ringRef.current) {
      ringRef.current.rotation.z += delta * 0.06;
      ringRef.current.rotation.x = Math.PI / 2.4 + Math.sin(state.clock.elapsedTime * 0.3) * 0.08;
      const s = 1.6 + p * 0.6;
      ringRef.current.scale.setScalar(s);
      const mat = ringRef.current.material as THREE.MeshBasicMaterial;
      mat.opacity = 0.18 + p * 0.15;
      mat.transparent = true;
    }
  });

  return (
    <group ref={groupRef}>
      <Points ref={pointsRef} positions={positions} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#7ec8ff"
          size={0.018}
          sizeAttenuation
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </Points>
      <mesh ref={meshRef}>
        <torusKnotGeometry args={[1.1, 0.32, 220, 32]} />
        <meshStandardMaterial
          color="#5aa9ff"
          emissive="#1f4fa8"
          emissiveIntensity={0.7}
          roughness={0.25}
          metalness={0.7}
          wireframe
          transparent
          opacity={0}
        />
      </mesh>
      <mesh ref={icoRef} position={[2, 1, -1]}>
        <icosahedronGeometry args={[0.55, 0]} />
        <meshStandardMaterial
          color="#9ad4ff"
          emissive="#3b82f6"
          emissiveIntensity={0.6}
          roughness={0.2}
          metalness={0.85}
          flatShading
          transparent
          opacity={0.5}
        />
      </mesh>
      <mesh ref={ringRef} rotation={[Math.PI / 2.4, 0, 0]}>
        <torusGeometry args={[2.6, 0.012, 16, 160]} />
        <meshBasicMaterial color="#7ec8ff" transparent opacity={0.2} />
      </mesh>
    </group>
  );
}

export function SceneBackground() {
  const [reduce, setReduce] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const m = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduce(m.matches);
    const onChange = () => setReduce(m.matches);
    m.addEventListener?.("change", onChange);
    return () => m.removeEventListener?.("change", onChange);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 -z-10">
      <div className="absolute inset-0 grid-fade-mask">
        {mounted && (
          <Canvas
            camera={{ position: [0, 0, 5], fov: 60 }}
            dpr={[1, reduce ? 1 : 1.5]}
            gl={{ antialias: true, alpha: true }}
          >
            <ambientLight intensity={0.55} />
            <pointLight position={[5, 5, 5]} intensity={1.4} color="#7ec8ff" />
            <pointLight position={[-5, -3, 2]} intensity={1.1} color="#3b82f6" />
            <Scene />
          </Canvas>
        )}
      </div>
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 50%, color-mix(in oklab, var(--background) 60%, transparent) 100%)",
        }}
      />
    </div>
  );
}
