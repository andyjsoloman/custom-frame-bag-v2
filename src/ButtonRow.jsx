import { panelColors } from "./constants";
import ColorButton from "./ColorButton";

export default function ButtonRow() {
  return (
    <div>
      {panelColors.map((button, index) => (
        <ColorButton key={index} label={button.label} color={button.color} />
      ))}
    </div>
  );
}
