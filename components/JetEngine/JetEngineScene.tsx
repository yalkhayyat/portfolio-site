"use client";

import { useRef, useEffect } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";

export function JetEngineScene({ modelPath }: { modelPath: string }) {
  const meshRef = useRef<THREE.Group>(null);
  const spinSpeedRef = useRef(0);
  const lastMouseXRef = useRef(0);
  const lastMouseYRef = useRef(0);
  const lastTimeRef = useRef(Date.now());
  const { scene } = useGLTF(modelPath);

  const MIN_SPEED = 0.005; // Minimum spinning speed
  const MAX_SPEED = 1; // Maximum possible spinning speed
  const FRICTION = 0.99; // Air resistance / friction factor
  const MOUSE_SENSITIVITY = 0.0005; // How much mouse movement affects rotation

  // Track mouse movement and calculate speed
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const currentTime = Date.now();
      const deltaTime = currentTime - lastTimeRef.current;
      if (deltaTime === 0) return;

      // Calculate mouse velocity (pixels per millisecond)
      const mouseVelocityX =
        Math.abs(event.clientX - lastMouseXRef.current) / deltaTime;
      const mouseVelocityY =
        Math.abs(event.clientY - lastMouseYRef.current) / deltaTime;
      const mouseVelocity = (mouseVelocityX + mouseVelocityY) / 2;

      // Add to current spin speed based on mouse velocity
      const addedSpeed = mouseVelocity * MOUSE_SENSITIVITY;
      spinSpeedRef.current = Math.min(
        spinSpeedRef.current + addedSpeed,
        MAX_SPEED
      );

      lastMouseXRef.current = event.clientX;
      lastMouseYRef.current = event.clientY;
      lastTimeRef.current = currentTime;
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Center and scale the model
  useEffect(() => {
    if (scene) {
      const box = new THREE.Box3().setFromObject(scene);
      const center = box.getCenter(new THREE.Vector3());
      scene.position.set(-center.x, -center.y, -center.z);

      const size = box.getSize(new THREE.Vector3());
      const maxDim = Math.max(size.x, size.y, size.z);
      const scale = 2 / maxDim;
      scene.scale.multiplyScalar(scale);
    }
  }, [scene]);

  // Apply rotation and friction
  useFrame(() => {
    if (meshRef.current) {
      // Apply friction
      spinSpeedRef.current = Math.max(
        spinSpeedRef.current * FRICTION,
        MIN_SPEED
      );

      // Apply rotation
      meshRef.current.rotation.z += spinSpeedRef.current;
    }
  });

  return <primitive ref={meshRef} object={scene} dispose={null} />;
}
