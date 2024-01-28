import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Experience from "./Experience";

export default function App() {
  return (
    <>
      <Canvas
        shadows={false}
        orthographic
        camera={{ fov: 100, zoom: 100, position: [0, 2, 8] }}
      >
        <OrbitControls />
        <Experience />
      </Canvas>
    </>
  );
}
