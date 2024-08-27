import { useLogin } from "../hooks/useLogin";
import Navbar from "../components/layouts/Navbar";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getProducts } from "../services/products.service";

const ProfilePage = () => {
  const [totalCart, setTotalCart] = useState(0);
  const [products, setProducts] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const user = useLogin();

  useEffect(() => {
    getProducts((data) => {
      setProducts(data);
    });
  }, []);

  const cart = useSelector((state) => state.cart.data);
  useEffect(() => {
    const sum = cart.reduce((acc, item) => {
      return acc + item.qty;
    }, 0);
    setTotalCart(sum);
  }, [cart]);

  useEffect(() => {
    if (products.length > 0 && cart.length > 0) {
      const sum = cart.reduce((acc, item) => {
        const findProduct = products.find((product) => product.id === item.id);
        return acc + findProduct.price * item.qty;
      }, 0);

      setTotalPrice(sum);
    }
  }, [cart, products]);
  return (
    <>
      <Navbar />

      <div className="w-full min-h-screen flex flex-col gap-4 items-center justify-center">
        <h1 className="text-3xl font-bold">Hello {user}</h1>
        <p className="text-2xl font-semibold">
          Jumlah keranjang anda : {totalCart}
        </p>
        <p className="text-2xl font-semibold">
          Total belanja anda{" "}
          {totalPrice.toLocaleString("us", {
            style: "currency",
            currency: "USD",
          })}
        </p>
      </div>
    </>
  );
};

export default ProfilePage;
