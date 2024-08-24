const Button = ({
  variant = "bg-emerald-700 text-white rounded-md h-10 px-6 font-semibold hover:bg-emerald-800",
  text = "Button default",
  onclick = () => {},
  type = "button",
}) => {
  return (
    <button type={type} onClick={onclick} className={` ${variant}`}>
      {text}
    </button>
  );
};

export default Button;
