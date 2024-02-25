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
    const isValid = Object.values(inputs).every((field) => field.trim() !== "");
    setIsFormValid(true);
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
