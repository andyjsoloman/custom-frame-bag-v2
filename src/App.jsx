import "./App.css";
import { Canvas } from "@react-three/fiber";
import { FullFrame } from "./FullFrame";
import { OrbitControls } from "@react-three/drei";

function App() {
  return (
    <>
      <Canvas>
        <OrbitControls />
        <directionalLight position={[1, 2, 3]} />
        <FullFrame></FullFrame>
      </Canvas>
    </>
  );
}

export default App;
