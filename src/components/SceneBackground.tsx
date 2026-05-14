import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import { useMemo, useRef, useState, useEffect } from "react";
import * as THREE from "three";

function Particles({ count = 2200 }: { count?: number }) {
  const ref = useRef<THREE.Points>(null);
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      // sphere distribution
      const r = 1.2 + Math.random() * 2.8;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      arr[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      arr[i * 3 + 2] = r * Math.cos(phi);
    }
    return arr;
  }, [count]);

  useFrame((state, delta) => {
    if (!ref.current) return;
    ref.current.rotation.y += delta * 0.04;
    ref.current.rotation.x += delta * 0.015;
    const { x, y } = state.pointer;
    ref.current.rotation.y += x * delta * 0.3;
    ref.current.rotation.x += -y * delta * 0.3;
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#7be3ff"
        size={0.015}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
}

function TorusMesh() {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state, delta) => {
    if (!ref.current) return;
    ref.current.rotation.x += delta * 0.2;
    ref.current.rotation.y += delta * 0.15;
    ref.current.position.x = state.pointer.x * 0.4;
    ref.current.position.y = state.pointer.y * 0.4;
  });
  return (
    <mesh ref={ref} position={[0, 0, 0]}>
      <torusKnotGeometry args={[1.1, 0.32, 200, 32]} />
      <meshStandardMaterial
        color="#b25dff"
        emissive="#5a23a8"
        emissiveIntensity={0.6}
        roughness={0.25}
        metalness={0.7}
        wireframe
      />
    </mesh>
  );
}

export function SceneBackground() {
  const [mode, setMode] = useState<"particles" | "mesh">("particles");
  const [reduce, setReduce] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  useEffect(() => {
    const m = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduce(m.matches);
    const onChange = () => setReduce(m.matches);
    m.addEventListener?.("change", onChange);

    const onSection = (e: Event) => {
      const id = (e as CustomEvent<string>).detail;
      if (id === "projects" || id === "experience") setMode("mesh");
      else setMode("particles");
    };
    window.addEventListener("sectionchange", onSection as EventListener);
    return () => {
      m.removeEventListener?.("change", onChange);
      window.removeEventListener("sectionchange", onSection as EventListener);
    };
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
            <ambientLight intensity={0.5} />
            <pointLight position={[5, 5, 5]} intensity={1.4} color="#7be3ff" />
            <pointLight position={[-5, -3, 2]} intensity={1.2} color="#ff6ad9" />
            {mode === "particles" ? <Particles /> : <TorusMesh />}
          </Canvas>
        )}
      </div>
      {/* vignette */}
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
