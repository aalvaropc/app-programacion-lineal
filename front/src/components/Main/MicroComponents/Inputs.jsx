import React, { useState, useEffect } from "react";

const Inputs = ({ placeholder, label, borrar, setborrar, value, setValue }) => {
  // useEffect para borrar el contenido cuando borrar se establece en true
  useEffect(() => {
    if (borrar) {
      setValue("");
    }
  }, [borrar]);

  const handleInputChange = (e) => {
    // Revisa si el valor ingresado es un número válido antes de actualizar el estado
    const inputValue = e.target.value;
    if (/^\d*\.?\d*$/.test(inputValue)) {
      setValue(inputValue);
      setborrar(false);
    }
  };

  return (
    <div className="gap-5 flex items-start justify-start h-fit p-1 box-content sm:flex-row">
      <input
        type="text"
        inputMode="numeric"
        pattern="[0-9]*"
        placeholder={placeholder}
        className="w-fit outline-none none py-1 rounded px-2"
        value={value}
        onChange={handleInputChange}
      />
      <label className="text-white w-8">{label}</label>
    </div>
  );
};

export default Inputs;
