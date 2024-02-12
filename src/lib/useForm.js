import { useState } from "react";

export default function useForm(initial = {}) {
  const [inputs, setInputs] = useState(initial);

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
  };
}
