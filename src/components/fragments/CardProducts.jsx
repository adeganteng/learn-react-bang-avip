import { Link } from "react-router-dom";
import Button from "../elements/button/Button";

const CardProducts = ({ children, id }) => {
  return (
    <Link
      to={`/products/${id}`}
      className="w-full sm:max-w-xs bg-teal-500 border-teal-800 rounded-lg shadow-lg shadow-teal-700 p-2 flex flex-col justify-between "
    >
      {children}
    </Link>
  );
};

const Header = ({ image }) => {
  return (
    <div>
      <img
        src={image}
        alt="Shoes"
        className="overflow-hidden max-h-52 min-h-52 object-center w-full"
      />
    </div>
  );
};

const Body = ({ description = "", title }) => {
  return (
    <div className="p-4 flex-1 flex flex-col">
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
        {title.slice(0, 15)}...
      </h5>
      <p className="mb-3 font-normal text-white ">
        {description.slice(0, 40)}
        {description.length < 40 ? "" : " . . ."}
      </p>
    </div>
  );
};

const Footer = ({ price, handleAddToCart, id }) => {
  return (
    <div className="p-2 pb-4 flex justify-between items-center">
      <span className="text-white text-xl font-bold tracking-tight">
        {price.toLocaleString("us", {
          style: "currency",
          currency: "USD",
        })}
      </span>
      <Button
        onclick={() => handleAddToCart(id)}
        variant="bg-slate-900 text-white rounded-md py-2 px-4 font-bold hover:bg-slate-800 transtion-all"
        text="Add to cart"
      />
    </div>
  );
};

CardProducts.Header = Header;
CardProducts.Body = Body;
CardProducts.Footer = Footer;

export default CardProducts;
