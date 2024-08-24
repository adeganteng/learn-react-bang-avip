import Button from "../elements/button/Button";
import InputForm from "../elements/input";

const FormRegister = () => {
  return (
    <form action="" className="mt-3">
      <InputForm
        htmlFor={"username"}
        titleLabel={"Username"}
        type={"text"}
        placeholder={"John Fredy"}
        id={"username"}
        required={true}
      />

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

      <InputForm
        htmlFor={"confirmPassword"}
        titleLabel={"Confirm Password"}
        type={"password"}
        placeholder={"*******"}
        id={"confirmPassword"}
        required={true}
      />

      <Button
        text="Register"
        variant="bg-slate-900 text-white w-full mt-8 font-bold hover:bg-slate-800 hover:text-white transtion-all rounded-md py-3"
      />
    </form>
  );
};

export default FormRegister;
