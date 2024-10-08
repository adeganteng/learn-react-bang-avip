import { useEffect } from "react";
import { useSelector } from "react-redux";
import {
  useTotalPrice,
  useTotalPriceDispatch,
} from "../../hooks/useTotalPrice";

const TableCart = ({ products }) => {
  const cart = useSelector((state) => state.cart.data);

  const dispatch = useTotalPriceDispatch();
  const { total } = useTotalPrice();

  useEffect(() => {
    if (products.length > 0 && cart.length > 0) {
      const sum = cart.reduce((acc, item) => {
        const findProduct = products.find((product) => product.id === item.id);
        return acc + findProduct.price * item.qty;
      }, 0);

      dispatch({ type: "UPDATE", payload: { total: sum } });
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart, products, dispatch]);
  return (
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
        {products.length > 0 &&
          cart.map((item, index) => {
            const product = products.find((product) => product.id === item.id);
            return (
              <tr key={index}>
                <td>{product.title.substring(0, 10)}...</td>
                <td>
                  {product.price.toLocaleString("us", {
                    style: "currency",
                    currency: "USD",
                  })}
                </td>
                <td>{item.qty}</td>
                <td>
                  {(product.price * item.qty).toLocaleString("us", {
                    style: "currency",
                    currency: "USD",
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
              {total.toLocaleString("us", {
                style: "currency",
                currency: "USD",
              })}
            </b>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default TableCart;
