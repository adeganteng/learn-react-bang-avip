import { forwardRef } from "react";
import Input from "./Input";
import Label from "./Label";

// eslint-disable-next-line react/display-name
const InputForm = forwardRef(
  ({ htmlFor, titleLabel, type, placeholder, id, required }, ref) => {
    return (
      <div className="mt-3">
        <Label htmlFor={htmlFor}>{titleLabel}</Label>
        <Input
          type={type}
          placeholder={placeholder}
          id={id}
          required={required}
          ref={ref}
        />
      </div>
    );
  }
);

export default InputForm;
