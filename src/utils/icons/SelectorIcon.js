import React from "react";
import { CaretUp, CaretDown } from "react-ionicons";

const SelectorIcon = () => {
  return (
    <div>
      <CaretUp color="#9ca3af" height="" width="12px" />
      <div className="-mt-1"></div>
      <CaretDown color="#9ca3af" height="" width="12px" />
    </div>
  );
};

export default SelectorIcon;
