import { Link } from "react-router-dom";

const AuthLayouts = ({ children, title, type }) => {
  return (
    <div
      className={`w-full bg-teal-700 px-6 py-8 flex flex-col rounded-lg shadow-lg `}
    >
      <h1 className="text-white text-2xl font-bold">{title}</h1>
      <p className="font-semibold text-slate-300 mt-3">
        Welcome to {title}, please enter your detail!
      </p>

      {children}

      {type === "signup" ? (
        <p className="text-slate-300 text-sm mt-8">
          Already have an account?{" "}
          <Link to={"/login"} className="text-black font-bold underline">
            Login
          </Link>
        </p>
      ) : (
        <p className="text-slate-300 text-sm mt-8">
          Don't have an account?{" "}
          <Link to={"/signup"} className="text-black font-bold underline">
            Signup
          </Link>
        </p>
      )}
    </div>
  );
};

export default AuthLayouts;
