import React from "react";

export default function VisibilityControl({
  description,
  isChecked,
  onChange,
}) {
  return (
    <div className="form-check">
      <input
        className="form-check-input"
        type="checkbox"
        checked={isChecked}
        onChange={(e) => onChange(e.target.checked)}
      />
      <label className="form-check-label">Show {description}</label>
    </div>
  );
}
