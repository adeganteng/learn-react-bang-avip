import { useContext } from "react";
import FormRegister from "../components/fragments/FormRegister";
import AuthLayouts from "../components/layouts/AuthLayouts";
import { DarkmodeContext } from "../context/Darkmode";

const RegisterPage = () => {
  const { isDarkmode, setIsDarkmode } = useContext(DarkmodeContext);
  return (
    <div
      className={`min-h-screen bg-slate-100 flex flex-col gap-3 justify-center items-center ${
        isDarkmode && "bg-slate-950"
      }`}
    >
      <button
        className={`fixed top-5 right-5 rounded-xl font-bold text-base p-4  ${
          isDarkmode ? "bg-white text-black" : " bg-teal-600  text-white"
        }`}
        onClick={() => setIsDarkmode(!isDarkmode)}
      >
        {isDarkmode ? "Light" : "Dark"}
      </button>
      <div className="flex justify-center items-center gap-3">
        <AuthLayouts title={"Register"} type={"signup"}>
          <FormRegister />
        </AuthLayouts>
      </div>
    </div>
  );
};

export default RegisterPage;
