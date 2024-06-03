/* eslint-disable react/prop-types */
import Select from "./Select";
import { bagSizes } from "./constants";

export default function BagSelectEdit({ onChange, bagSize }) {
  return (
    <Select
      value={bagSize}
      onChange={(e) => {
        onChange(e.target.value);
      }}
    >
      {bagSizes.map((option) => (
        <option key={option.label} value={option.label}>
          {option.label}
        </option>
      ))}
    </Select>
  );
}
