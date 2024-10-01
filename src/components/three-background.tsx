import { Canvas } from "@react-three/fiber";
import { css } from "../../styled-system/css";
import { useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";
import { Environment } from "@react-three/drei";
import Flowers from "./three/flowers";
import { useGLTF } from "@react-three/drei";

export default function ThreeBackground({ front }: { front: boolean }) {
  const mouse = {
    x: useMotionValue(0),
    y: useMotionValue(0),
  };

  const smoothMouse = {
    x: useSpring(mouse.x, { stiffness: 70, damping: 100, mass: 3 }),
    y: useSpring(mouse.y, { stiffness: 70, damping: 100, mass: 1 }),
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      const x = clientX / innerWidth;
      const y = clientY / innerHeight;
      mouse.x.set(x);
      mouse.y.set(y);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouse.x, mouse.y]);
  return (
    <div
      className={css({
        width: "screen",
        height: "screen",
        position: "absolute",
        left: "0",
        top: "0",
        zIndex: front ? 2 : -1,
      })}
    >
      <Canvas
        orthographic
        camera={{ position: [0, 0, 0], zoom: 60 }}
        style={{ background: !front ? "azure" : "transparent" }}
      >
        <Flowers front={front} mouse={smoothMouse} />
        <Environment preset="apartment" />
      </Canvas>
    </div>
  );
}

useGLTF.preload("/front_flower.glb");
useGLTF.preload("/back_flower.glb");
