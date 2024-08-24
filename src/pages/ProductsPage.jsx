import { useNavigate } from "react-router-dom";
import Button from "../components/elements/button/Button";
import CardProducts from "../components/fragments/CardProducts";

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
  const navigate = useNavigate();
  const email = localStorage.getItem("email");
  const handleLogout = () => {
    navigate("/login");
    localStorage.clear();
  };
  return (
    <>
      <header className="flex justify-between items-center bg-teal-600 py-8 px-6 lg:px-36">
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
            variant="bg-red-500 text-white rounded-full "
            onclick={handleLogout}
          />
        </div>
      </header>
      <div className=" bg-slate-100 p-8 gap-4  flex flex-wrap items-start justify-center">
        {products.map((product) => (
          <CardProducts key={product.id}>
            <CardProducts.Header images={product.images} />
            <CardProducts.Body
              title={product.title}
              description={product.description}
            />
            <CardProducts.Footer price={product.price} />
          </CardProducts>
        ))}
      </div>
    </>
  );
};

export default ProductsPage;
