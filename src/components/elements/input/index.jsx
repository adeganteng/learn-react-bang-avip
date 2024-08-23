import Input from "./Input";
import Label from "./Label";

const InputForm = ({
  htmlFor,
  titleLabel,
  type,
  placeholder,
  id,
  required,
}) => {
  return (
    <div className="mt-3">
      <Label htmlFor={htmlFor}>{titleLabel}</Label>
      <Input
        type={type}
        placeholder={placeholder}
        id={id}
        required={required}
      />
    </div>
  );
};

export default InputForm;
