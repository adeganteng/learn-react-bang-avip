import axios from "axios";

export const getProducts = async (callback) => {
  try {
    const res = await axios.get("https://fakestoreapi.com/products");
    return callback(res.data);
  } catch (error) {
    console.log(error.message);
  }
};

export const getDetailProduct = async (id, callback) => {
  try {
    const res = await axios.get(`https://fakestoreapi.com/products/${id}`);
    return callback(res.data);
  } catch (error) {
    console.log(error.message);
  }
};
