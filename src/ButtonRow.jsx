/* eslint-disable react/prop-types */
import { panelColorOptions } from "./constants";
import ColorButton from "./ColorButton";

export default function ButtonRow({ handleSelectColor, panelIndex }) {
  return (
    <div>
      {panelColorOptions.map((button, index) => (
        <ColorButton
          key={index}
          label={button.label}
          color={button.color}
          onClick={() => handleSelectColor(panelIndex, button.color)}
        />
      ))}
    </div>
  );
}
