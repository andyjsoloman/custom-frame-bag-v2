/* eslint-disable react/prop-types */
import { panelColors } from "./constants";
import ColorButton from "./ColorButton";

export default function ButtonRow({ handleSelectColor }) {
  return (
    <div>
      {panelColors.map((button, index) => (
        <ColorButton
          key={index}
          label={button.label}
          color={button.color}
          onClick={() => handleSelectColor(button.color)}
        />
      ))}
    </div>
  );
}
