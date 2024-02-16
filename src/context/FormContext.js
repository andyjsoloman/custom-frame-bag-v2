import { createContext, useState, useEffect } from "react";

const FormContext = createContext({});

export const FormProvider = ({ children }) => {
  const title = {
    0: "Panel Colours",
    1: "Zippers & Mounting",
    2: "Order Info",
  };

  const [page, setPage] = useState(0);

  return <FormContext.Provider value={{}}>{children}</FormContext.Provider>;
};

export default FormContext;
