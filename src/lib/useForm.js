import { useState, useEffect } from "react";

export default function useForm(initial = {}) {
  const [inputs, setInputs] = useState(initial);
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    // Form Validation - Are all inputs filled out
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
  }, [inputs]);

  function handleChange(e) {
    setInputs({
      //Copy the existing state
      ...inputs,
      [e.target.name]: e.target.value,
    });
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
