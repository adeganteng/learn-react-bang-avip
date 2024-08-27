import { useContext } from "react";
import {
  TotalPriceContext,
  TotalPriceDispatchContext,
} from "../context/TotalPriceContext";

export const useTotalPrice = () => {
  return useContext(TotalPriceContext);
};

export const useTotalPriceDispatch = () => {
  return useContext(TotalPriceDispatchContext);
};
