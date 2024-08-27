import { Link, useParams } from "react-router-dom";
import Button from "../components/elements/button/Button";
import { useLogin } from "../hooks/useLogin";
import { useLogout } from "../hooks/useLogout";
import { useEffect, useState } from "react";
import { getDetailProduct } from "../services/products.service";

const DetailProductPage = () => {
  const user = useLogin();
  const { handleLogout } = useLogout();

  const { id } = useParams();

  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (id) {
      getDetailProduct(id, (data) => {
        setProduct(data);
      });
    } else {
      setProduct(null);
    }
  }, [id]);

  return (
    <>
      <header className="flex justify-between items-center bg-teal-600 border border-b-teal-600 py-8 px-6 lg:px-36">
        <h1 className="text-4xl font-extrabold">
          My<span className="text-white">Store</span>
        </h1>

        <div className="flex gap-4 items-center">
          <p className="bg-white text-black text-xl p-4 py-2 rounded-full font-bold">
            {user}
          </p>

          <Link to="/products" className="text-black font-bold underline">
            Products
          </Link>

          <Button
            type="button"
            text="Logout"
            variant="bg-red-500 text-white rounded-full px-4 py-2 font-bold hover:bg-red-600 transtion-all"
            onclick={handleLogout}
          />
        </div>
      </header>

      <div className="w-full min-h-screen flex  items-center p-10 flex-col">
        <h1 className="text-3xl font-bold">{product?.title}</h1>

        <div className="w-full max-w-6xl flex justify-center flex-col p-4">
          <img
            src={product?.image}
            alt={product?.title}
            className="w-96 object-center mx-auto"
          />

          <div className="flex items-start justify-between mt-8">
            <h1 className="text-3xl font-bold bg-teal-600 text-white p-4 rounded-full max-w-max">
              {product?.category}
            </h1>
            <h1 className="text-3xl font-bold bg-black text-white p-4 rounded-full ">
              {product?.price.toLocaleString("us", {
                style: "currency",
                currency: "USD",
              })}
            </h1>
          </div>
          <div className="w-full px-4 ">
            <p className="text-xl my-4 font-semibold text-slate-700">
              {product?.description}
            </p>

            <p className="text-xl font-semibold text-slate-950">
              Rating: {product?.rating?.rate} ({product?.rating?.count})
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailProductPage;
