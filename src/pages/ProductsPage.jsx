import CardProducts from "../components/fragments/CardProducts";
import { useContext, useEffect, useState } from "react";
import { getProducts } from "../services/products.service";
import { useLogin } from "../hooks/useLogin";

import TableCart from "../components/fragments/TableCart";
import Navbar from "../components/layouts/Navbar";
import { DarkmodeContext } from "../context/Darkmode";

const ProductsPage = () => {
  const [products, setProducts] = useState([]);

  const { isDarkmode } = useContext(DarkmodeContext);

  useLogin();

  useEffect(() => {
    getProducts((data) => {
      setProducts(data);
    });
  }, []);

  return (
    <>
      <Navbar />
      <div
        className={`bg-slate-100 gap-4  flex justify-center ${
          isDarkmode && "bg-slate-950"
        }`}
      >
        <div className="flex-1 flex flex-wrap items-start justify-start px-4 py-8 gap-4">
          {products?.length > 0 &&
            products?.map((product) => (
              <CardProducts key={product.id}>
                <CardProducts.Header image={product.image} id={product.id} />
                <CardProducts.Body
                  title={product.title}
                  description={product.description}
                />
                <CardProducts.Footer id={product.id} price={product.price} />
              </CardProducts>
            ))}
        </div>

        <div className="flex-1 bg-teal-600 py-8 px-2 text-white border border-teal-600 ">
          <h1 className="text-3xl font-bold text-white text-center">CART</h1>
          <TableCart products={products} />
        </div>
      </div>
    </>
  );
};

export default ProductsPage;
