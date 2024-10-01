import { useGLTF } from "@react-three/drei";
import { Mesh, BufferGeometry, Material } from "three";
import { MotionValue } from "framer-motion";
import Flower from "./flower";

export default function Flowers({
  front,
  mouse,
}: {
  front: boolean;
  mouse: { x: MotionValue<number>; y: MotionValue<number> };
}) {
  const { nodes } = useGLTF(front ? "/front_flower.glb" : "/back_flower.glb");

  return (
    <group>
      <Flower
        node={nodes.Flower001 as Mesh<BufferGeometry, Material>}
        mouse={mouse}
        multiplier={2}
        front={front}
      />
      <Flower
        node={nodes.Flower002 as Mesh<BufferGeometry, Material>}
        mouse={mouse}
        multiplier={1.9}
        front={front}
      />
      <Flower
        node={nodes.Flower003 as Mesh<BufferGeometry, Material>}
        mouse={mouse}
        multiplier={1}
        front={front}
      />
      <Flower
        node={nodes.Flower004 as Mesh<BufferGeometry, Material>}
        mouse={mouse}
        multiplier={1.1}
        front={front}
      />
      <Flower
        node={nodes.Flower005 as Mesh<BufferGeometry, Material>}
        mouse={mouse}
        multiplier={1.8}
        front={front}
      />
      {!front ? (
        <Flower
          node={nodes.Flower006 as Mesh<BufferGeometry, Material>}
          mouse={mouse}
          multiplier={1.7}
        />
      ) : null}
      {!front ? (
        <Flower
          node={nodes.Flower007 as Mesh<BufferGeometry, Material>}
          mouse={mouse}
          multiplier={1.7}
        />
      ) : null}
      {!front ? (
        <Flower
          node={nodes.Flower008 as Mesh<BufferGeometry, Material>}
          mouse={mouse}
          multiplier={1.7}
        />
      ) : null}
      {!front ? (
        <Flower
          node={nodes.Flower009 as Mesh<BufferGeometry, Material>}
          mouse={mouse}
          multiplier={1.7}
        />
      ) : null}
      {!front ? (
        <Flower
          node={nodes.Flower010 as Mesh<BufferGeometry, Material>}
          mouse={mouse}
          multiplier={1.7}
        />
      ) : null}
    </group>
  );
}
