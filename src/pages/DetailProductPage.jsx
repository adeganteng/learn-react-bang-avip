import { useLogin } from "../hooks/useLogin";
import { useContext, useEffect, useState } from "react";
import { getDetailProduct } from "../services/products.service";
import { DarkmodeContext } from "../context/Darkmode";
import Navbar from "../components/layouts/Navbar";
import { useParams } from "react-router-dom";

const DetailProductPage = () => {
  useLogin();

  const { id } = useParams();

  const [product, setProduct] = useState(null);

  const { isDarkmode } = useContext(DarkmodeContext);

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
      <Navbar />

      <div
        className={`w-full min-h-screen flex  items-center p-10 flex-col ${
          isDarkmode && "bg-slate-950 text-white"
        }`}
      >
        <h1 className="text-3xl font-bold">{product?.title}</h1>

        <div className="w-full max-w-6xl flex justify-center flex-col p-4">
          <img
            src={product?.image}
            alt={product?.title}
            className="w-96 object-center mx-auto p-3 bg-teal-600 rounded-xl"
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
