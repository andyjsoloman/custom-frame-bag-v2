/* eslint-disable react/prop-types */
export default function Submit({ handleSubmit }) {
  const handleClick = () => {
    handleSubmit();
  };

  return <button onClick={handleClick}>Submit Order Info</button>;
}
