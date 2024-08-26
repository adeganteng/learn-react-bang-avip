import { useNavigate } from "react-router-dom";
import Button from "../components/elements/button/Button";
import CardProducts from "../components/fragments/CardProducts";
import { useEffect, useState } from "react";

const products = [
  {
    id: 1,
    title: "Shoes",
    price: 1000000,
    description:
      "This is a shoes product with some description here and more content here.",
    images: "/images/shoes-1.jpg",
  },
  {
    id: 2,
    title: "Shoes Adidas",
    price: 1500000,
    description:
      "Adidas is a shoes product with some description here and more content here.",
    images: "/images/shoes-1.jpg",
  },
  {
    id: 3,
    title: "Shoes Adidas",
    price: 1500000,
    description: "Adidas is a shoes product with some description here.",
    images: "/images/shoes-1.jpg",
  },
  {
    id: 4,
    title: "Shoes Adidas",
    price: 1500000,
    description:
      "Adidas is a shoes product with some description here and more content here.",
    images: "/images/shoes-1.jpg",
  },
];

const ProductsPage = () => {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem("cart")) || []);
  }, []);

  useEffect(() => {
    if (cart.length > 0) {
      const sum = cart.reduce((acc, item) => {
        const findProduct = products.find((product) => product.id === item.id);
        return acc + findProduct.price * item.qty;
      }, 0);

      setTotalPrice(sum);
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart]);

  const navigate = useNavigate();
  const email = localStorage.getItem("email");
  const handleLogout = () => {
    navigate("/login");
    localStorage.clear();
  };

  const handleAddToCart = (id) => () => {
    const findId = cart.find((item) => item.id === id);

    if (findId) {
      setCart(
        cart.map((item) =>
          item.id === id ? { ...item, qty: item.qty + 1 } : item
        )
      );
    } else {
      setCart([...cart, { id, qty: 1 }]);
    }
  };

  return (
    <>
      <header className="flex justify-between items-center bg-teal-600 border border-b-teal-600 py-8 px-6 lg:px-36">
        <h1 className="text-4xl font-extrabold">
          My<span className="text-white">Store</span>
        </h1>

        <div className="flex gap-4 items-center">
          <p className="bg-white text-black text-xl p-4 py-2 rounded-full font-bold">
            {email.slice(0, 10)}...
          </p>

          <Button
            type="button"
            text="Logout"
            variant="bg-red-500 text-white rounded-full px-4 py-2 font-bold hover:bg-red-600 transtion-all"
            onclick={handleLogout}
          />
        </div>
      </header>
      <div className=" bg-slate-100 gap-4  flex justify-center">
        <div className="flex-1 flex flex-wrap items-start justify-start px-4 py-8 gap-4">
          {products.map((product) => (
            <CardProducts key={product.id}>
              <CardProducts.Header images={product.images} />
              <CardProducts.Body
                title={product.title}
                description={product.description}
              />
              <CardProducts.Footer
                id={product.id}
                price={product.price}
                handleAddToCart={handleAddToCart(product.id)}
              />
            </CardProducts>
          ))}
        </div>

        <div className="flex-1 bg-teal-600 py-8 px-2 text-white border border-teal-600">
          <h1 className="text-3xl font-bold text-white text-center">CART</h1>
          {cart.length > 0 && (
            <table className="mt-4 table-auto border-separate border-spacing-x-5 mx-auto">
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Qty</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item, index) => {
                  const product = products.find(
                    (product) => product.id === item.id
                  );
                  return (
                    <tr key={index}>
                      <td>{product.title}</td>
                      <td>
                        {product.price.toLocaleString("id", {
                          style: "currency",
                          currency: "IDR",
                          maximumFractionDigits: 0,
                        })}
                      </td>
                      <td>{item.qty}</td>
                      <td>
                        {(product.price * item.qty).toLocaleString("id", {
                          style: "currency",
                          currency: "IDR",
                          maximumFractionDigits: 0,
                        })}
                      </td>
                    </tr>
                  );
                })}
                <tr>
                  <td colSpan={3} className="font-bold text-black ">
                    <b>Total Price</b>
                  </td>
                  <td className="font-bold text-black ">
                    <b>
                      {totalPrice.toLocaleString("id", {
                        style: "currency",
                        currency: "IDR",
                        maximumFractionDigits: 0,
                      })}
                    </b>
                  </td>
                </tr>
              </tbody>
            </table>
          )}
        </div>
      </div>
    </>
  );
};

export default ProductsPage;
