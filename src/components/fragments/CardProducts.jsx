import { Link } from "react-router-dom";
import Button from "../elements/button/Button";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/slices/cartSlice";

const CardProducts = ({ children, id }) => {
  return (
    <div
      to={`/products/${id}`}
      className="w-full sm:max-w-xs bg-teal-500 border-teal-800 rounded-lg shadow-lg shadow-teal-700 p-2 flex flex-col justify-between "
    >
      {children}
    </div>
  );
};

const Header = ({ image }) => {
  return (
    <Link>
      <img
        src={image}
        alt="Shoes"
        className="overflow-hidden max-h-52 min-h-52 object-center w-full"
      />
    </Link>
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

const Footer = ({ price, id }) => {
  const dispatch = useDispatch();
  return (
    <div className="p-2 pb-4 flex justify-between items-center">
      <span className="text-white text-xl font-bold tracking-tight">
        {price.toLocaleString("us", {
          style: "currency",
          currency: "USD",
        })}
      </span>
      <Button
        onclick={() => dispatch(addToCart({ id, qty: 1 }))}
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
