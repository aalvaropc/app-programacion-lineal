import React, { useState, useEffect } from "react";

const SelectBox = ({ borrar, setborrar }) => {
  const [selectedValue, setSelectedValue] = useState(
    borrar ? "" : "selecciona"
  );

  const handleSelectChange = (e) => {
    setSelectedValue(e.target.value);
    setborrar(e.target.value === "");
  };

  useEffect(() => {
    if (borrar) {
      setSelectedValue("selecciona");
    }
  }, [borrar]);

  return (
    <select
      className="outline-none px-4 py-1 rounded"
      value={selectedValue}
      onChange={handleSelectChange}
    >
      <option value="">Selecciona</option>
      <option value="maximizar">Maximizar</option>
      <option value="minimizar">Minimizar</option>
    </select>
  );
};

export default SelectBox;
