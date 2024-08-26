import { useNavigate } from "react-router-dom";
import Button from "../elements/button/Button";
import InputForm from "../elements/input";
import { useEffect, useRef, useState } from "react";
import { login } from "../../services/auth.service";

const FormLogin = () => {
  const [loginFailed, setLoginFailed] = useState(false);
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    const data = {
      username: e.target.username.value,
      password: e.target.password.value,
    };
    login(data, (status, res) => {
      if (status) {
        localStorage.setItem("token", res);
        navigate("/products");
      } else {
        setLoginFailed(res.response.data);
      }
    });
  };

  const usernameRef = useRef(null);

  useEffect(() => {
    usernameRef.current.focus();
  }, []);

  return (
    <form onSubmit={handleLogin} className="mt-3">
      <InputForm
        htmlFor={"username"}
        titleLabel={"Username"}
        type={"text"}
        placeholder={"Enter your username"}
        id={"username"}
        required={true}
        ref={usernameRef}
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
        variant="bg-slate-900 text-white w-full mt-8 font-bold hover:bg-slate-800 transtion-all py-3 rounded-md"
        type="submit"
      />

      {loginFailed && <p className="text-red-500 font-bold">{loginFailed}</p>}
    </form>
  );
};

export default FormLogin;
