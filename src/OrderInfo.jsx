/* eslint-disable react/prop-types */
export default function OrderInfo({
  inputs,
  handleChange,
  setCurrentStep,
  currentStep,
}) {
  return (
    <>
      <h2>Order Info</h2>
      <label htmlFor="name">
        Name
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Name"
          //   value={inputs.name}
          onChange={handleChange}
        />
      </label>
      <label htmlFor="bike">
        Bike
        <input
          type="text"
          id="bike"
          name="bike"
          placeholder="Bike"
          //   value={inputs.bike}
          onChange={handleChange}
        />
      </label>
      <label htmlFor="bikeSize">
        Bike Size
        <input
          type="text"
          id="bikeSize"
          name="bikeSize"
          placeholder="Bike Size"
          //   value={inputs.bikeSize}
          onChange={handleChange}
        />
      </label>
      <label htmlFor="email">
        Email
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          //   value={inputs.email}
          onChange={handleChange}
        />
      </label>
      <button onClick={() => setCurrentStep(currentStep - 1)}>Back</button>
    </>
  );
}
