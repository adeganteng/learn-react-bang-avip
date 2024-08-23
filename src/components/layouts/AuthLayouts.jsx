const AuthLayouts = ({ children, title }) => {
  return (
    <div className="w-full bg-teal-700 px-6 py-8 flex flex-col rounded-lg shadow-lg">
      <h1 className="text-white text-2xl font-bold">{title}</h1>
      <p className="font-semibold text-slate-300 mt-3">
        Welcome to {title}, please enter your detail!
      </p>

      {children}
    </div>
  );
};

export default AuthLayouts;
