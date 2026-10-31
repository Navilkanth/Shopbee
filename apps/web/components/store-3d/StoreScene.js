'use client';

import { ContactShadows, OrbitControls, Text } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { useMemo, useState } from 'react';

function DepartmentBox({ dept, selected, onSelect }) {
  const [hovered, setHovered] = useState(false);
  const scaleY = hovered || selected ? 1.08 : 1;

  return (
    <group position={[dept.x, dept.height / 2, dept.z]}>
      <mesh
        castShadow
        receiveShadow
        scale={[1, scaleY, 1]}
        onClick={(e) => {
          e.stopPropagation();
          onSelect(dept);
        }}
        onPointerOver={(e) => {
          e.stopPropagation();
          setHovered(true);
          if (typeof document !== 'undefined') document.body.style.cursor = 'pointer';
        }}
        onPointerOut={() => {
          setHovered(false);
          if (typeof document !== 'undefined') document.body.style.cursor = 'auto';
        }}
      >
        <boxGeometry args={[dept.width, dept.height, dept.depth]} />
        <meshStandardMaterial
          color={dept.color}
          roughness={0.45}
          metalness={0.08}
          emissive={selected ? dept.color : '#000000'}
          emissiveIntensity={selected ? 0.35 : 0}
        />
      </mesh>
      <Text
        position={[0, dept.height / 2 + 0.45, 0]}
        fontSize={0.35}
        color={selected ? '#F4B942' : '#FDFBF7'}
        anchorX="center"
        anchorY="middle"
        outlineWidth={0.03}
        outlineColor="#111111"
      >
        {dept.name}
      </Text>
    </group>
  );
}

function Building({ departments, selectedId, onSelect }) {
  return (
    <>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 3]} receiveShadow>
        <planeGeometry args={[28, 26]} />
        <meshStandardMaterial color="#E8DED0" />
      </mesh>
      <mesh position={[0, 1.6, -8.6]}>
        <boxGeometry args={[22, 3.2, 0.35]} />
        <meshStandardMaterial color="#292929" />
      </mesh>
      <mesh position={[-11.2, 1.6, 3]}>
        <boxGeometry args={[0.35, 3.2, 24]} />
        <meshStandardMaterial color="#292929" />
      </mesh>
      <mesh position={[11.2, 1.6, 3]}>
        <boxGeometry args={[0.35, 3.2, 24]} />
        <meshStandardMaterial color="#292929" />
      </mesh>
      {departments.map((dept) => (
        <DepartmentBox
          key={dept.id}
          dept={dept}
          selected={selectedId === dept.id}
          onSelect={onSelect}
        />
      ))}
    </>
  );
}

export default function StoreScene({ layout, selectedId, onSelect }) {
  const departments = useMemo(() => layout?.departments || [], [layout]);

  return (
    <div className="h-[560px] w-full overflow-hidden rounded-[2rem] bg-[#1a1714]">
      <Canvas shadows camera={{ position: [18, 16, 22], fov: 42 }} onPointerMissed={() => onSelect(null)}>
        <color attach="background" args={['#1a1714']} />
        <ambientLight intensity={0.55} />
        <directionalLight
          position={[12, 18, 8]}
          intensity={1.35}
          castShadow
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
        />
        <pointLight position={[-8, 8, 10]} intensity={0.4} color="#F4B942" />
        <Building departments={departments} selectedId={selectedId} onSelect={onSelect} />
        <ContactShadows position={[0, 0.01, 3]} opacity={0.35} scale={32} blur={2.4} />
        <OrbitControls
          makeDefault
          autoRotate
          autoRotateSpeed={0.6}
          enablePan
          minDistance={12}
          maxDistance={40}
          maxPolarAngle={Math.PI / 2.15}
        />
      </Canvas>
    </div>
  );
}
