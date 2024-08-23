const Input = ({ type, placeholder, id, required }) => {
  return (
    <input
      type={type}
      id={id}
      className="w-full rounded p-2 placeholder:opacity-80 bg-slate-300 mt-1 text-black outline-none  focus:outline-teal-100"
      required={required}
      placeholder={placeholder}
    />
  );
};

export default Input;
