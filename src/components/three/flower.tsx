import { Mesh, BufferGeometry, Material } from "three";
import { MotionValue, useTransform } from "framer-motion";
import { motion } from "framer-motion-3d";
import { Float } from "@react-three/drei";

export default function Flower({
  node,
  mouse,
  multiplier,
  front,
}: {
  node: Mesh<BufferGeometry, Material | Material[]>;
  mouse: { x: MotionValue<number>; y: MotionValue<number> };
  multiplier: number;
  front: boolean;
}) {
  const {
    castShadow,
    receiveShadow,
    geometry,
    material,
    position,
    rotation,
    scale,
  } = node;
  const rotationX = useTransform(
    mouse.x,
    [0, 1],
    [rotation.x - multiplier, rotation.x + multiplier],
  );
  const rotationY = useTransform(
    mouse.y,
    [0, 1],
    [rotation.y + 0.7 + multiplier, rotation.y + multiplier],
  );
  const positionX = useTransform(
    mouse.x,
    [0, 1],
    [position.x - 2, position.x + 2],
  );
  const positionY = useTransform(
    mouse.y,
    [0, 2],
    [position.y + 2, position.y - 2],
  );
  return (
    <Float floatingRange={[0, 0.2]}>
      {front ? (
        <motion.mesh
          castShadow={castShadow}
          receiveShadow={receiveShadow}
          geometry={geometry}
          material={material}
          position={position}
          rotation={rotation}
          scale={scale}
          rotation-x={rotationY}
          rotation-y={rotationX}
          position-x={positionX}
          position-y={positionY}
        />
      ) : (
        <motion.mesh
          castShadow={castShadow}
          receiveShadow={receiveShadow}
          geometry={geometry}
          material={material}
          position={position}
          rotation={rotation}
          scale={scale}
          rotation-x={rotationY}
          rotation-y={rotationX}
        />
      )}
    </Float>
  );
}
