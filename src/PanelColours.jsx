/* eslint-disable react/prop-types */
import ButtonRow from "./ButtonRow";

export default function PanelColours({
  bagSize,
  setPanelColor,
  setCurrentStep,
  currentStep,
}) {
  return (
    <>
      <h2>Panel Colours</h2>
      <h3>Section 1</h3>
      <ButtonRow handleSelectColor={setPanelColor} panelIndex={0} />
      <h3>Section 2</h3>
      <ButtonRow handleSelectColor={setPanelColor} panelIndex={1} />
      <h3>Section 3</h3>
      <ButtonRow handleSelectColor={setPanelColor} panelIndex={2} />
      <h3>Section 4</h3>
      <ButtonRow handleSelectColor={setPanelColor} panelIndex={3} />
      {bagSize === "Full Frame 2 Zip" && (
        <>
          <h3>Section 5</h3>
          <ButtonRow handleSelectColor={setPanelColor} panelIndex={4} />
          <h3>Section 6</h3>
          <ButtonRow handleSelectColor={setPanelColor} panelIndex={5} />
        </>
      )}
      {bagSize === "Double Whammy" && (
        <>
          <h3>Section 5</h3>
          <ButtonRow handleSelectColor={setPanelColor} panelIndex={4} />
          <h3>Section 6</h3>
          <ButtonRow handleSelectColor={setPanelColor} panelIndex={5} />
          <h3>Section 7</h3>
          <ButtonRow handleSelectColor={setPanelColor} panelIndex={6} />
          <h3>Section 8</h3>
          <ButtonRow handleSelectColor={setPanelColor} panelIndex={7} />
        </>
      )}

      <button onClick={() => setCurrentStep(currentStep + 1)}>Next</button>
    </>
  );
}
