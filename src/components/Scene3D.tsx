import { useRef, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float, Torus, Octahedron, Icosahedron } from "@react-three/drei";
import * as THREE from "three";

const PALETTE = ["#8d72d6", "#c1432a", "#2f8f86", "#e8ae3f"];

function OrbitingShapes() {
  const shapes = useMemo(
    () =>
      [
        { pos: [2.6, 1.4, -0.6], scale: 0.42, kind: "torus", color: PALETTE[0] },
        { pos: [-2.4, -1.2, -0.3], scale: 0.34, kind: "octa", color: PALETTE[1] },
        { pos: [1.9, -1.9, 0.4], scale: 0.28, kind: "octa", color: PALETTE[2] },
        { pos: [-2.1, 1.8, 0.2], scale: 0.36, kind: "torus", color: PALETTE[3] },
        { pos: [0, 2.4, -1], scale: 0.22, kind: "ico", color: PALETTE[0] },
      ] as const,
    []
  );

  return (
    <>
      {shapes.map((s, i) => (
        <Float key={i} speed={1.1 + i * 0.15} rotationIntensity={1.6} floatIntensity={2.2}>
          {s.kind === "torus" && (
            <Torus args={[s.scale, s.scale * 0.38, 16, 32]} position={s.pos as unknown as [number, number, number]}>
              <meshStandardMaterial color={s.color} roughness={0.45} metalness={0.05} />
            </Torus>
          )}
          {s.kind === "octa" && (
            <Octahedron args={[s.scale]} position={s.pos as unknown as [number, number, number]}>
              <meshStandardMaterial color={s.color} roughness={0.45} metalness={0.05} />
            </Octahedron>
          )}
          {s.kind === "ico" && (
            <Icosahedron args={[s.scale, 0]} position={s.pos as unknown as [number, number, number]}>
              <meshStandardMaterial color={s.color} roughness={0.45} metalness={0.05} />
            </Icosahedron>
          )}
        </Float>
      ))}
    </>
  );
}

function ParallaxRig({ children }: { children: React.ReactNode }) {
  const group = useRef<THREE.Group>(null);
  const { viewport } = useThree();

  useFrame((state) => {
    if (!group.current) return;
    const x = (state.pointer.x * viewport.width) / 50;
    const y = (state.pointer.y * viewport.height) / 50;
    group.current.rotation.y += (x - group.current.rotation.y) * 0.03;
    group.current.rotation.x += (-y - group.current.rotation.x) * 0.03;
  });

  return <group ref={group}>{children}</group>;
}

export default function Scene3D() {
  return (
    <Canvas
      dpr={[1, 1.75]}
      camera={{ position: [0, 0, 6.2], fov: 42 }}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
    >
      <ambientLight intensity={0.9} />
      <directionalLight position={[4, 5, 5]} intensity={1.1} />
      <directionalLight position={[-4, -2, 2]} intensity={0.4} color="#8d72d6" />

      <ParallaxRig>
        <OrbitingShapes />
      </ParallaxRig>
    </Canvas>
  );
}
