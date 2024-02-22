import Price from "./Price";
import Progress from "./Progress";
import Submit from "./Sumbit";

export default function Footer({ bagSize }) {
  return (
    <>
      <Price bagSize={bagSize} />
      <Progress />
      <Submit />
    </>
  );
}
