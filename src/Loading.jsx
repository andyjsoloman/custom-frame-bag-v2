import { Html } from "@react-three/drei";
import styled from "styled-components";

const Loader = styled.div`
  width: 50px;
  aspect-ratio: 1;
  color: #303030;
  border-radius: 50%;
  display: grid;
  background: conic-gradient(from 90deg at 4px 4px, #0000 90deg, currentColor 0) -4px -4px /
      calc(50% + 2px) calc(50% + 2px),
    radial-gradient(
        farthest-side,
        currentColor 6px,
        #0000 7px calc(100% - 6px),
        currentColor calc(100% - 5px)
      )
      no-repeat;
  animation: l10 2s infinite linear;
  position: relative;

  &:before {
    content: "";
    border-radius: inherit;
    background: inherit;
    transform: rotate(45deg);

    @keyframes l10 {
      to {
        transform: rotate(0.5turn);
      }
    }
  }
`;

function Loading() {
  return (
    <Html>
      <Loader></Loader>
    </Html>
  );
}

export default Loading;
