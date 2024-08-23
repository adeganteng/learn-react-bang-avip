import FormLogin from "../components/fragments/FormLogin";
import AuthLayouts from "../components/layouts/AuthLayouts";

const LoginPage = () => {
  return (
    <div className="min-h-screen bg-slate-100 flex flex-col gap-3 justify-center items-center">
      <div className="flex justify-center items-center gap-3">
        <AuthLayouts title={"Login"} type={"login"}>
          <FormLogin />
        </AuthLayouts>
      </div>
    </div>
  );
};

export default LoginPage;
