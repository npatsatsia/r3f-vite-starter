import { Center, Cylinder, Text3D } from "@react-three/drei";
import { CylinderCollider, RigidBody } from "@react-three/rapier";
import { useGameStore } from "../store";
import fonty from '../../public/fonts/fonty.json'

export const KanaSpots = () => {
  const { level, currentKana, currentStage } = useGameStore((state) => ({
    level: state.level,
    currentKana: state.currentKana,
    currentStage: state.currentStage,
  }));

  if (!level) {
    return null;
  }

  console.log(level)

  return level[currentStage].map((kana, index) => (
    <group
      key={kana.name}
      rotation-y={(index / level[currentStage].length) * Math.PI * 2}
    >
      <group position-x={3.5} position-z={-3.5}>
        <RigidBody colliders={false} type="fixed">
          <CylinderCollider args={[0.25 / 2, 1]} />
          <Cylinder scale={[1, 0.25, 1]}>
            <meshStandardMaterial color="white" />
          </Cylinder>
        </RigidBody>

        <Center position-y={0.8}>
          <Text3D
            font={fonty}
            size={0.82}
            rotation-y={-(index / level[currentStage].length) * Math.PI * 2}
          >
            {kana.character.hiragana}
            <meshNormalMaterial />
          </Text3D>
        </Center>
      </group>
    </group>
  ));
};
