import { useNavigate } from "react-router-dom";
import Button from "../elements/button/Button";
import InputForm from "../elements/input";

const FormLogin = () => {
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    const inputEmail = e.target.email.value;
    const inputPassword = e.target.password.value;
    localStorage.setItem("email", inputEmail);
    localStorage.setItem("password", inputPassword);

    navigate("/products");
  };
  return (
    <form onSubmit={handleLogin} className="mt-3">
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
        variant="bg-slate-900 text-white w-full mt-8 font-bold hover:bg-slate-800 transtion-all"
        type="submit"
      />
    </form>
  );
};

export default FormLogin;
