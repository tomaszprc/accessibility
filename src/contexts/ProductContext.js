import { createContext } from "react";
import { products } from "../products";

export const ProductContext = createContext({ products: [] });

export const ProductProvider = ({ children }) => {
  return (
    <ProductContext.Provider value={{ products: products }}>
      {children}
    </ProductContext.Provider>
  );
};