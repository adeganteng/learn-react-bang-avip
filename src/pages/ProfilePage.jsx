import { useLogin } from "../hooks/useLogin";
import Navbar from "../components/layouts/Navbar";
import { useSelector } from "react-redux";
import { useContext, useEffect, useState } from "react";
import { DarkmodeContext } from "../context/Darkmode";
import { useTotalPrice } from "../hooks/useTotalPrice";

const ProfilePage = () => {
  const [totalCart, setTotalCart] = useState(0);

  const { isDarkmode } = useContext(DarkmodeContext);

  const user = useLogin();

  const { total } = useTotalPrice();

  const cart = useSelector((state) => state.cart.data);
  useEffect(() => {
    const sum = cart.reduce((acc, item) => {
      return acc + item.qty;
    }, 0);
    setTotalCart(sum);
  }, [cart]);

  return (
    <>
      <Navbar />

      <div
        className={`w-full min-h-screen flex flex-col gap-4 items-center justify-center ${
          isDarkmode && "bg-slate-950 text-white"
        }`}
      >
        <h1 className="text-3xl font-bold">Hello {user}</h1>
        <p className="text-2xl font-semibold">
          Jumlah keranjang anda : {totalCart}
        </p>
        <p className="text-2xl font-semibold">
          Total belanja anda{" "}
          {total.toLocaleString("us", {
            style: "currency",
            currency: "USD",
          })}
        </p>
      </div>
    </>
  );
};

export default ProfilePage;
