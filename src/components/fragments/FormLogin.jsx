import Button from "../elements/button/Button";
import InputForm from "../elements/input";

const FormLogin = () => {
  return (
    <form action="" className="mt-3">
      <InputForm
        htmlFor={"email"}
        titleLabel={"Email"}
        type={"email"}
        placeholder={"Enter your email"}
        id={"email"}
        required={true}
      />

      <InputForm
        htmlFor={"password"}
        titleLabel={"Password"}
        type={"password"}
        placeholder={"*******"}
        id={"password"}
        required={true}
      />

      <Button
        text="Login"
        variant="bg-slate-300 text-black w-full mt-8 font-bold hover:bg-slate-900 hover:text-white transtion-all"
      />
    </form>
  );
};

export default FormLogin;
