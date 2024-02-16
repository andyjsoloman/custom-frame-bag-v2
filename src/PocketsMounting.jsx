export default function PocketsMounting({ inputs, handleChange }) {
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
        />
        Non-Drive Half
      </label>
      <label htmlFor="entry">
        <input
          type="radio"
          name="pockets"
          id="nd-full"
          value="Non Drive Full"
          onChange={handleChange}
        />
        Non-Drive Full
      </label>
      <h3>Mounting</h3>
      <label htmlFor="mounting">
        <input
          type="radio"
          name="mounting"
          id="velcro"
          value="Standard Velcro"
          onChange={handleChange}
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
    </>
  );
}
