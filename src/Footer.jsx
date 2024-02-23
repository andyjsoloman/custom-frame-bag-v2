import Price from "./Price";
import Progress from "./Progress";
import Submit from "./Sumbit";

export default function Footer({ bagSize, inputs }) {
  return (
    <>
      <Price bagSize={bagSize} inputs={inputs} />
      <Progress />
      <Submit />
    </>
  );
}
