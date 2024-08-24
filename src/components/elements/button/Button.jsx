const Button = ({
  variant = "bg-emerald-700 text-white rounded-md",
  text = "Button default",
  onclick = () => {},
  type = "button",
}) => {
  return (
    <button
      type={type}
      onClick={() => onclick()}
      className={`h-10 px-6 font-semibold  ${variant}`}
    >
      {text}
    </button>
  );
};

export default Button;
