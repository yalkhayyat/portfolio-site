"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import { Suspense } from "react";
import { JetEngineScene } from "./JetEngineScene";
import { Environment } from "@react-three/drei";

export function JetEngineCanvas({ modelPath }: { modelPath: string }) {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div
      className={`w-full h-screen transition-opacity duration-500 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <Canvas
        camera={{
          position: [0, 0, 4],
          fov: 30,
        }}
      >
        <Suspense fallback={null}>
          <Environment preset="city" environmentIntensity={0.3} />
          <pointLight position={[0, -1, 1]} intensity={6} color="#2dd4bf" />
          <FadeInScene
            modelPath={modelPath}
            onVisible={() => setIsVisible(true)}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}

const FadeInScene = ({
  modelPath,
  onVisible,
}: {
  modelPath: string;
  onVisible: () => void;
}) => {
  const opacityRef = useRef(0);

  useFrame((state, delta) => {
    opacityRef.current += delta * 2; // Increase opacity over time
    opacityRef.current = Math.min(opacityRef.current, 1); // Clamp to 1

    if (opacityRef.current >= 1) {
      onVisible(); // Call the onVisible callback to update the parent component's state
    }
  });

  return (
    <>
      <JetEngineScene modelPath={modelPath} />
    </>
  );
};
