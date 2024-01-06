import React from "react";

const Input = React.forwardRef((props, ref) => {
  const { id, label, placeholder, ...rest } = props;
  return (
    <div className="mb-3">
      <label className="form-label" htmlFor={id}>
        {label}
      </label>
      <input
        ref={ref}
        type="text"
        className="form-control"
        id={id}
        placeholder={placeholder}
        {...rest}
      />
    </div>
  );
});

export default Input;
