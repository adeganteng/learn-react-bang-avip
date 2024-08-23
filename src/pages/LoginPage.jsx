import FormLogin from "../components/fragments/FormLogin";
import AuthLayouts from "../components/layouts/AuthLayouts";

const LoginPage = () => {
  return (
    <div className="min-h-screen bg-slate-100 flex flex-col gap-3 justify-center items-center">
      <div className="flex justify-center items-center gap-3">
        <AuthLayouts title={"Login"}>
          <FormLogin />

          <p className="text-slate-300 text-sm mt-8">
            Don't have an account?{" "}
            <span className="text-black underline">Signup</span>
          </p>
        </AuthLayouts>
      </div>
    </div>
  );
};

export default LoginPage;
