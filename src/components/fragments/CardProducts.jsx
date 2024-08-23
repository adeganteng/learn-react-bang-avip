import { Link } from "react-router-dom";

const CardProducts = ({ children }) => {
  return (
    <div className="w-full max-w-xs bg-teal-500 border-teal-800 rounded-lg shadow-lg shadow-teal-700 p-2">
      {children}
    </div>
  );
};

const Header = ({ images }) => {
  return (
    <Link>
      <img src={images} alt="Shoes" className="overflow-hidden" />
    </Link>
  );
};

const Body = ({ children, title }) => {
  return (
    <div className="p-4">
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
        {title}
      </h5>
      <p className="mb-3 font-normal text-white">{children}</p>
    </div>
  );
};

const Footer = ({ price }) => {
  return (
    <div className="p-2 pb-4 flex justify-between items-center ">
      <span className="text-white text-xl font-bold tracking-tight">
        {price.toLocaleString("id", {
          style: "currency",
          currency: "IDR",
          maximumFractionDigits: 0,
        })}
      </span>
      <button className="bg-black text-xl p-3 text-white rounded-lg">
        Add to cart
      </button>
    </div>
  );
};

CardProducts.Header = Header;
CardProducts.Body = Body;
CardProducts.Footer = Footer;

export default CardProducts;
