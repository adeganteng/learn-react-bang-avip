import { Link } from "react-router-dom";
import FormRegister from "../components/fragments/FormRegister";
import AuthLayouts from "../components/layouts/AuthLayouts";

const RegisterPage = () => {
  return (
    <div className="min-h-screen bg-slate-100 flex flex-col gap-3 justify-center items-center">
      <div className="flex justify-center items-center gap-3">
        <AuthLayouts title={"Register"}>
          <FormRegister />

          <p className="text-slate-300 text-sm mt-8">
            Already have an account?{" "}
            <Link to={"/login"} className="text-black font-bold underline">
              Login
            </Link>
          </p>
        </AuthLayouts>
      </div>
    </div>
  );
};

export default RegisterPage;
