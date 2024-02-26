import React from "react";
import "./CheckBox.css";
import useUnit from "../../Hook/useUnit";

const CheckBox = ({ mediciones}) => {
  const { handleCheckedMedicion} = useUnit();
  return (
    <>
      {Object.entries(mediciones).map(([key, value]) => (
        <div key={key} className="checkbox">
          <input
            type="checkbox"
            id={key}
            onChange={() => handleCheckedMedicion(value)}
          />
          <label className="checkbox-label" htmlFor={key}>
            {value}
          </label>
        </div>
      ))}
    </>
  );
};

export default CheckBox;
