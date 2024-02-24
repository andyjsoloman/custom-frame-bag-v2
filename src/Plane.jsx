/* eslint-disable react/no-unknown-property */
export default function Plane() {
  return (
    <mesh position-y={-2.5} rotation-x={-Math.PI * 0.5} scale={40}>
      <planeGeometry />
      <meshStandardMaterial color="#ffffff" />
    </mesh>
  );
}
