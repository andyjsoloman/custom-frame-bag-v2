/* eslint-disable react/prop-types */
import Select from "react-select";
import { panelColorOptions } from "./constants";

const options = panelColorOptions.map((option) => ({
  value: option.label,
  label: option.label,
  color: option.color,
}));

const formatOptionLabel = ({ label, color }) => (
  <div style={{ display: "flex", alignItems: "center" }}>
    <span
      style={{
        display: "inline-block",
        width: 25,
        height: 25,
        borderRadius: "50%",
        backgroundColor: color,
        marginRight: 10,
      }}
    />
    {label}
  </div>
);

export default function ColorSelect({ onChange }) {
  return (
    <Select
      options={options}
      formatOptionLabel={formatOptionLabel}
      onChange={onChange}
      isSearchable={false}
    />
  );
}
