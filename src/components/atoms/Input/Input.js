import React, { useState, useEffect } from "react";

function Input(props) {
  const {
    label,
    type = "text",
    name,
    id,
    onChange,
    initialValue = "",
    placeholder,
    validateOn,
    validator
  } = props;
  const [value, setValue] = useState(initialValue);

  const onChangeHandler = (e) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    if (onChange) {
      onChange(name, value);
    }
  }, [value]);

  return (
    <div className="input-group">
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        type={type}
        name={name}
        value={value}
        onChange={onChangeHandler}
        placeholder={placeholder}
      />
    </div>
  );
}

export default Input;
