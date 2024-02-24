/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";

export default function Price({ bagSize, inputs }) {
  const [bagPrice, setBagPrice] = useState(null);
  const [hasDivider, setHasDivider] = useState(false);
  const [hasBoltOn, setHasBoltOn] = useState(false);
  const [pocketChoice, setPocketChoice] = useState(false);

  useEffect(() => {
    let basePrice = 0;
    if (bagSize === "Half Frame") {
      basePrice += 250;
    } else if (bagSize === "Full Frame") {
      basePrice += 275;
    } else if (bagSize === "Full Frame 2 Zip") {
      basePrice += 325;
    } else if (bagSize === "Double Whammy") {
      basePrice += 400;
    }
    if (hasDivider) {
      basePrice += 50;
    }

    if (hasBoltOn) {
      basePrice += 30;
    }

    if (pocketChoice) {
      basePrice += 30;
    }
    setBagPrice(basePrice);
  }, [bagSize, hasDivider, hasBoltOn, pocketChoice]);

  useEffect(() => {
    if (inputs.entry === "Two Main Zippers w/Divider") {
      setHasDivider(true);
    } else if (
      inputs.entry === "One Main Zipper" ||
      inputs.entry === "Two Main Zippers" ||
      inputs.entry === "Roll Top"
    ) {
      setHasDivider(false);
    }
  }, [inputs, hasDivider, bagSize]);

  useEffect(() => {
    if (inputs.mounting === "Bolt-On") {
      setHasBoltOn(true);
    } else if (
      inputs.mounting === "Standard Velcro" ||
      inputs.mounting === "Lace-Up" ||
      inputs.mounting === "Other"
    ) {
      setHasBoltOn(false);
    }
  }, [inputs, hasBoltOn, bagSize]);

  useEffect(() => {
    if (
      inputs.pockets === "Non Drive Half" ||
      inputs.pockets === "Non Drive Full"
    ) {
      setPocketChoice(true);
    } else if (inputs.pockets === "None") {
      setPocketChoice(false);
    }
  }, [inputs, pocketChoice, bagSize]);

  return (
    <>
      <h2>${bagPrice}</h2>
    </>
  );
}
