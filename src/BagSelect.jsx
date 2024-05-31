/* eslint-disable react/prop-types */
import Select from "react-select";
import { bagSizes } from "./constants";

const options = bagSizes.map((option) => ({
  value: option.label,
  label: option.label,
}));

const formatOptionLabel = ({ label }) => (
  <div style={{ display: "flex", alignItems: "center" }}>{label}</div>
);

export default function BagSelect({ onChange }) {
  return (
    <Select
      options={options}
      formatOptionLabel={formatOptionLabel}
      onChange={(selectedOption) => {
        onChange(selectedOption.value);
      }}
      placeholder="Change Bag Style..."
      isSearchable={false}
    />
  );
}
