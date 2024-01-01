import {
  Cylinder,
  OrbitControls,
  MeshReflectorMaterial,
  Text3D,
} from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";
import { CylinderCollider } from "@react-three/rapier";
import { Torii } from "./torii";
import {kanas} from '../constant'
import { useGameStore } from "../store";
import { useEffect } from "react";
import { KanaSpots } from "./kanaSpots";
import Character from "./character";
import { CharacterController } from "./characterController";

export const Experience = () => {

  return (
    <>
      <OrbitControls />
      <ambientLight intesity={5}/>
      <directionalLight 
        position={[5, 5, 5]}
        intesity={0.8}
        castShadow
        color={"#9e69da"}
      />
      <mesh position={[0, -1.5, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[50, 50]} />
        <MeshReflectorMaterial
          blur={[400, 400]}
          resolution={1024}
          mixBlur={1}
          mixStrength={15}
          depthScale={1}
          minDepthThreshold={0.85}
          color="#dbecfb"
          metalness={0.6}
          roughness={1}
        />
      </mesh>
      <Torii
        scale={[1, 1, 1]}
        position={[1, 1, -14]}
        rotation-y={0}
      />
      <Torii
        scale={[0.85, 0.85, 0.85]}
        position={[-6, 0, -16]}
        rotation-y={1.2 * Math.PI}
      />
      <Torii scale={[0.85, 0.85, 0.85]}
        position={[8.2, 0, -16]}
        rotation-y={0.8 * Math.PI}
      />
      <group position-y={-1}>
        <RigidBody colliders={false} type="fixed" position-y={-0.5} friction={2} >
          <CylinderCollider args={[1 /2, 5]} />
          <Cylinder scale={[5, 1, 5]} >
            <meshStandardMaterial color='white'/>
          </Cylinder>
        </RigidBody>
        <CharacterController/>
        <KanaSpots/>
      </group>
    </>
  );
};
