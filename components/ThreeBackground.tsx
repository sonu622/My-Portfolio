'use client';

import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Float } from '@react-three/drei';
import * as THREE from 'three';

// @ts-expect-error maath does not have types
import * as random from 'maath/random/dist/maath-random.esm';

interface InSphere {
    inSphere(buffer: Float32Array, options: { radius: number }): Float32Array;
}

function Stars(props: object) {
    const ref = useRef<THREE.Points>(null!);
    const sphere = useMemo(() => {
        return (random as unknown as InSphere).inSphere(new Float32Array(5000), { radius: 1.5 });
    }, []);

    useFrame((_state, delta) => {
        if (ref.current) {
            ref.current.rotation.x -= delta / 10;
            ref.current.rotation.y -= delta / 15;
        }
    });

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
                <PointMaterial
                    transparent
                    color="#722ed2"
                    size={0.002}
                    sizeAttenuation={true}
                    depthWrite={false}
                />
            </Points>
        </group>
    );
}

function FloatingShapes() {
    return (
        <Float speed={2} rotationIntensity={1} floatIntensity={1}>
            <mesh position={[1.5, 1, -2]}>
                <icosahedronGeometry args={[0.5, 1]} />
                <meshStandardMaterial color="#722ed2" wireframe transparent opacity={0.3} />
            </mesh>
            <mesh position={[-2, -1.5, -3]}>
                <torusGeometry args={[0.8, 0.2, 16, 100]} />
                <meshStandardMaterial color="#2e72d2" wireframe transparent opacity={0.2} />
            </mesh>
        </Float>
    );
}

const ThreeBackground = () => {
    return (
        <div className="fixed inset-0 z-[-1] pointer-events-none bg-[#050505]">
            <Canvas camera={{ position: [0, 0, 1] }}>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} />
                <Stars />
                <FloatingShapes />
            </Canvas>
        </div>
    );
};

export default ThreeBackground;
