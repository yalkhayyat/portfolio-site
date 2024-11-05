"use client";

import { Canvas } from "@react-three/fiber";
import { useEffect, useState } from "react";
import { Suspense } from "react";
import { JetEngineScene } from "./JetEngineScene";
import { Environment } from "@react-three/drei";

export function JetEngineCanvas({ modelPath }: { modelPath: string }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Add a small delay to trigger the opacity transition
    const timeoutId = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div
      className={`w-full h-screen transition-opacity duration-1000 ${
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
          <Environment preset="city" />

          <JetEngineScene modelPath={modelPath} />
        </Suspense>
      </Canvas>
    </div>
  );
}
