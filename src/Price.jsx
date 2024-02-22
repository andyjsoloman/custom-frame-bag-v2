import { useState, useEffect } from "react";

export default function Price({ bagSize }) {
  const [bagPrice, setBagPrice] = useState(null);

  useEffect(() => {
    if (bagSize === "Half Frame") {
      setBagPrice("$250");
    } else if (bagSize === "Full Frame") {
      setBagPrice("$275");
    } else if (bagSize === "Full Frame 2 Zip") {
      setBagPrice("$325");
    } else if (bagSize === "Double Whammy") {
      setBagPrice("$400");
    }
  }, [bagSize]);

  return (
    <>
      <h2>{bagPrice}</h2>
    </>
  );
}
