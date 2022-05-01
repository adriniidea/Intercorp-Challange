import React from "react";

export default function Field({
  name,
  value,
  type,
  label,
  min,
  max,
  handleChange,
}) {
  return (
    <div className="mb-3">
      <label className="form-label">{label}</label>
      <input
        value={value}
        type={type}
        min={min ? min : null}
        max={max ? max : null}
        className="form-control"
        name={name}
        onChange={handleChange}
      />
    </div>
  );
}
