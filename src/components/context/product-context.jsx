import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
//url to call the products
export const ProductContext = createContext();

export const useProductContext = () => {
  return useContext(ProductContext);
};

export const ProductContextProvider = ({ children }) => {
  useEffect(() => {
    const allProducts = async () => {
      try {
        const response = await axios.get("http://localhost:5000/product/", {
          withCredentials: true,
        });
        console.log("the response from valid => ", response);
      } catch (error) {
        if (error instanceof axios.AxiosError) {
          console.log("the error => ", error?.response?.data);
        }
      }
    };
    allProducts();
  }, []);

  return (
    <ProductContext.Provider value={{}}>{children}</ProductContext.Provider>
  );
};
