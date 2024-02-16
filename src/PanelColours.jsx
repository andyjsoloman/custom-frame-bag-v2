import ButtonRow from "./ButtonRow";

export default function PanelColours({
  bagSize,
  setPanel1Color,
  setPanel2Color,
  setPanel3Color,
  setPanel4Color,
  setPanel5Color,
  setPanel6Color,
  setPanel7Color,
  setPanel8Color,
}) {
  return (
    <>
      <h2>Panel Colours</h2>
      <h3>Section 1</h3>
      <ButtonRow handleSelectColor={setPanel1Color} />
      <h3>Section 2</h3>
      <ButtonRow handleSelectColor={setPanel2Color} />
      <h3>Section 3</h3>
      <ButtonRow handleSelectColor={setPanel3Color} />
      <h3>Section 4</h3>
      <ButtonRow handleSelectColor={setPanel4Color} />
      {bagSize === "Full Frame 2 Zip" && (
        <>
          <h3>Section 5</h3>
          <ButtonRow handleSelectColor={setPanel5Color} />
          <h3>Section 6</h3>
          <ButtonRow handleSelectColor={setPanel6Color} />
        </>
      )}
      {bagSize === "Double Whammy" && (
        <>
          <h3>Section 5</h3>
          <ButtonRow handleSelectColor={setPanel5Color} />
          <h3>Section 6</h3>
          <ButtonRow handleSelectColor={setPanel6Color} />
          <h3>Section 7</h3>
          <ButtonRow handleSelectColor={setPanel7Color} />
          <h3>Section 8</h3>
          <ButtonRow handleSelectColor={setPanel8Color} />
        </>
      )}
    </>
  );
}
