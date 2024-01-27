/* eslint-disable react/no-unknown-property */
export default function Plane() {
  return (
    <mesh position-y={-4} rotation-x={-Math.PI * 0.5} scale={40} receiveShadow>
      <planeGeometry />
      <meshStandardMaterial color="coral" />
    </mesh>
  );
}
