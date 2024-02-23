/* eslint-disable react/prop-types */
export default function PocketsMounting({
  inputs,
  handleChange,
  setCurrentStep,
  currentStep,
}) {
  return (
    <>
      <h2>Pockets & Mounting</h2>
      <h3>Entry</h3>
      <label htmlFor="entry">
        <input
          type="radio"
          name="entry"
          id="main-zipper"
          value="One Main Zipper"
          onChange={handleChange}
          checked={inputs.entry === "One Main Zipper"}
        />
        1 Main Zipper
      </label>
      <label htmlFor="entry">
        <input
          type="radio"
          name="entry"
          id="main-zipper-div"
          value="Two Main Zippers w/Divider"
          onChange={handleChange}
          checked={inputs.entry === "Two Main Zippers w/Divider"}
        />
        2 Main Zippers w/ Divider
      </label>
      <label htmlFor="entry">
        <input
          type="radio"
          name="entry"
          id="roll-top"
          value="Roll Top"
          onChange={handleChange}
          checked={inputs.entry === "Roll Top"}
        />
        Roll Top
      </label>
      <h3>Pockets</h3>
      <label htmlFor="pockets">
        <input
          type="radio"
          name="pockets"
          id="nd-half"
          value="Non Drive Half"
          onChange={handleChange}
          checked={inputs.pockets === "Non Drive Half"}
        />
        Non-Drive Half
      </label>
      <label htmlFor="pockets">
        <input
          type="radio"
          name="pockets"
          id="nd-full"
          value="Non Drive Full"
          onChange={handleChange}
          checked={inputs.pockets === "Non Drive Full"}
        />
        Non-Drive Full
      </label>
      <label htmlFor="pockets">
        <input
          type="radio"
          name="pockets"
          id="none"
          value="None"
          onChange={handleChange}
          checked={inputs.pockets === "None"}
        />
        None
      </label>
      <h3>Mounting</h3>
      <label htmlFor="mounting">
        <input
          type="radio"
          name="mounting"
          id="velcro"
          value="Standard Velcro"
          onChange={handleChange}
          checked={inputs.mounting === "Standard Velcro"}
        />
        Standard Velcro
      </label>
      <label htmlFor="mounting">
        <input
          type="radio"
          name="mounting"
          id="laceup"
          value="Lace-Up"
          onChange={handleChange}
          checked={inputs.mounting === "Lace-Up"}
        />
        Lace-Up
      </label>
      <label htmlFor="mounting">
        <input
          type="radio"
          name="mounting"
          id="bolton"
          value="Bolt-On"
          onChange={handleChange}
          checked={inputs.mounting === "Bolt-On"}
        />
        Bolt-On
      </label>
      <label htmlFor="mounting">
        <input
          type="radio"
          name="mounting"
          id="other"
          value="Other"
          onChange={handleChange}
          checked={inputs.mounting === "Other"}
        />
        Other
        {inputs.mounting === "Other" && (
          <input
            type="text"
            id="otherDetails"
            name="mountingDetails"
            placeholder="Details"
            value={inputs.mountingDetails}
            onChange={handleChange}
          />
        )}
      </label>
      <button onClick={() => setCurrentStep(currentStep - 1)}>Back</button>
      <button onClick={() => setCurrentStep(currentStep + 1)}>Next</button>
    </>
  );
}
