import { useState } from "react";

export default function useForm(initial = {}) {
  const [inputs, setInputs] = useState(initial);
  const [isFormValid, setIsFormValid] = useState(false);

  function handleChange(e) {
    setInputs({
      //Copy the existing state
      ...inputs,
      [e.target.name]: e.target.value,
    });
    //Working logic to check if all form items are filled out BUT remove mountingDetails from consideration if 'Other is not selected
    //Still seems to be a delay on updating state (select other then change mind, this logic has to run 1-2 times befroe state is updated)
    //Still need to check if panelColours are valid
    //Also does not prompt as to what info is missing
    if (inputs.mounting !== "Other") {
      const editInputs = { ...inputs };
      delete editInputs.mountingDetails;
      const isFormFilledOut = Object.values(editInputs).every(
        (value) => value !== undefined && value !== null && value !== ""
      );
      setIsFormValid(isFormFilledOut);
    } else {
      const regInputs = { ...inputs };
      const isFormFilledOut = Object.values(regInputs).every(
        (value) => value !== undefined && value !== null && value !== ""
      );
      setIsFormValid(isFormFilledOut);
    }
    console.log(isFormValid);
  }

  function resetForm() {
    setInputs(initial);
  }

  function clearForm() {
    const blankState = Object.fromEntries(
      Object.entries(inputs).map(([key, value]) => [key, ""])
    );
    setInputs(blankState);
  }

  return {
    inputs,
    handleChange,
    resetForm,
    clearForm,
    isFormValid,
  };
}
