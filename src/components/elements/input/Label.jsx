const Label = ({ htmlFor, children }) => {
  return (
    <label htmlFor={htmlFor} className="text-white font-medium">
      {children}
    </label>
  );
};

export default Label;
