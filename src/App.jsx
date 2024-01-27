import "./App.css";
import { Canvas } from "@react-three/fiber";
import { FullFrame } from "./FullFrame";
import { OrbitControls } from "@react-three/drei";

function App() {
  return (
    <>
      <Canvas
        orthographic
        camera={{ fov: 100, zoom: 100, position: [0, 0, 8] }}
      >
        <OrbitControls />
        <directionalLight position={[1, 2, 3]} intensity={3} />
        <ambientLight />
        <FullFrame scale={0.1} position={[-2, -1, 0]} />
      </Canvas>
    </>
  );
}

export default App;
