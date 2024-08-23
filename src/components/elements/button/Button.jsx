const Button = ({
  variant = "bg-emerald-700 text-white",
  text = "Button default",
}) => {
  return (
    <button className={`h-10 px-6 font-semibold rounded-md ${variant}`}>
      {text}
    </button>
  );
};

export default Button;
