/* eslint-disable react/prop-types */
import Price from "./Price";
import Progress from "./Progress";
import Submit from "./Sumbit";

export default function Footer({ bagSize, inputs, handleSubmit }) {
  return (
    <>
      <Price bagSize={bagSize} inputs={inputs} handleSubmit={handleSubmit} />
      <Progress />
      <Submit handleSubmit={handleSubmit} />
    </>
  );
}
