import { Link, useLocation } from "react-router-dom";
import { useLogin } from "../../hooks/useLogin";
import Button from "../elements/button/Button";
import { useLogout } from "../../hooks/useLogout";
import { useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { DarkmodeContext } from "../../context/Darkmode";

const Navbar = () => {
  const [totalCart, setTotalCart] = useState(0);

  const { isDarkmode, setIsDarkmode } = useContext(DarkmodeContext);

  const user = useLogin();
  const handleLogout = useLogout();

  const location = useLocation();
  const cart = useSelector((state) => state.cart.data);
  useEffect(() => {
    const sum = cart.reduce((acc, item) => {
      return acc + item.qty;
    }, 0);

    setTotalCart(sum);
  }, [cart]);

  return (
    <header className="flex justify-between items-center bg-teal-600 border border-b-teal-600 py-8 px-6 lg:px-36">
      <h1 className="text-4xl font-extrabold">
        My<span className="text-white">Store</span>
      </h1>

      <div className="flex gap-4 items-center">
        <p className="bg-white text-black text-xl p-4 py-2 rounded-full font-bold">
          {user}
        </p>

        {location.pathname === "/products" ? (
          <Link to="/profile" className="text-white font-bold underline">
            Profile
          </Link>
        ) : (
          <Link to="/products" className="text-white font-bold underline">
            Products
          </Link>
        )}

        <Button
          type="button"
          text="Logout"
          variant="bg-red-500 text-white rounded-full px-4 py-2 font-bold hover:bg-red-600 transtion-all"
          onclick={handleLogout}
        />
        <div className="bg-white text-black text-xl p-4 py-2 rounded-full font-bold">
          {totalCart}
        </div>
        <button
          className={`rounded-xl font-bold text-base p-2  ${
            isDarkmode ? "bg-white text-black" : " bg-black  text-white"
          }`}
          onClick={() => setIsDarkmode(!isDarkmode)}
        >
          {isDarkmode ? "Light" : "Dark"}
        </button>
      </div>
    </header>
  );
};

export default Navbar;
