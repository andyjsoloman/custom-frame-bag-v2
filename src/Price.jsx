/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";

export default function Price({ bagSize, inputs }) {
  const [bagPrice, setBagPrice] = useState(null);
  const [hasDivider, setHasDivider] = useState(false);
  const [hasBoltOn, setHasBoltOn] = useState(false);
  const [pocketChoice, setPocketChoice] = useState(false);

  useEffect(() => {
    if (bagSize === "Half Frame") {
      setBagPrice(250);
    } else if (bagSize === "Full Frame") {
      setBagPrice(275);
    } else if (bagSize === "Full Frame 2 Zip") {
      setBagPrice(325);
    } else if (bagSize === "Double Whammy") {
      setBagPrice(400);
    }
  }, [bagSize]);

  useEffect(() => {
    if (inputs.entry === "Two Main Zippers w/Divider" && !hasDivider) {
      setBagPrice((prevPrice) => prevPrice + 50);
      setHasDivider(true);
    } else if (
      (inputs.entry === "One Main Zipper" ||
        inputs.entry === "Two Main Zippers" ||
        inputs.entry === "Roll Top") &&
      hasDivider
    ) {
      setBagPrice((prevPrice) => prevPrice - 50);
      setHasDivider(false);
    }
  }, [inputs, hasDivider]);

  useEffect(() => {
    if (inputs.mounting === "Bolt-On" && !hasBoltOn) {
      setBagPrice((prevPrice) => prevPrice + 30);
      setHasBoltOn(true);
    } else if (
      (inputs.mounting === "Standard Velcro" ||
        inputs.mounting === "Lace-Up" ||
        inputs.mounting === "Other") &&
      hasBoltOn
    ) {
      setBagPrice((prevPrice) => prevPrice - 30);
      setHasBoltOn(false);
    }
  }, [inputs, hasBoltOn]);

  useEffect(() => {
    if (inputs.pockets === "Non Drive Half" && !pocketChoice) {
      setBagPrice((prevPrice) => prevPrice + 30);
      setPocketChoice(true);
    } else if (inputs.pockets === "Non Drive Full" && !pocketChoice) {
      setBagPrice((prevPrice) => prevPrice + 30);
      setPocketChoice(true);
    } else if (inputs.pockets === "None" && pocketChoice) {
      setBagPrice((prevPrice) => prevPrice - 30);
      setPocketChoice(false);
    }
  }, [inputs, pocketChoice]);

  return (
    <>
      <h2>${bagPrice}</h2>
    </>
  );
}
