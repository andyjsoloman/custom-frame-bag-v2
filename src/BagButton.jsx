/* eslint-disable react/prop-types */
export default function BagButton({ onClick, label }) {
  return <button onClick={onClick}>{label}</button>;
}
