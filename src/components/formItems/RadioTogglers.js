'use client'
import React from "react";

export default function RadioTogglers({ options, selected, onChange }) {

  return (
    <div>
      <div className="radio-togglers">
        {options.map((option) => (
          <label key={option.value}>
            <input 
              type="radio" 
              name="bgType" 
              value={option.value} 
            />
            <span className="">{option.label}</span>
          </label>
        ))}
      </div>
    </div>
  );
}
