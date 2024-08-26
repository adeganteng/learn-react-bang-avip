import { forwardRef } from "react";

// eslint-disable-next-line react/display-name
const Input = forwardRef((props, ref) => {
  const { type, placeholder, id, required } = props;
  return (
    <input
      type={type}
      id={id}
      className="w-full rounded p-2 placeholder:opacity-80 bg-slate-300 mt-1 text-black outline-none  focus:outline-teal-100"
      required={required}
      placeholder={placeholder}
      ref={ref}
    />
  );
});

export default Input;
