import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

//context to valid the user and give access to the admin board in the nav......
export const AuthContext = createContext();

export const useAuthContext = () => {
  return useContext(AuthContext);
};

export const AuthContextProvider = ({ children }) => {
  const [userDetails, setUserDetails] = useState(true);
  const [message, setMessage] = useState("");
  const base_url = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    const allProducts = async () => {
      try {
        const response = await axios.get(`${base_url}/user/validateToken`, {
          withCredentials: true,
        });

        console.log("the response from valid => ", response);
        if (response?.data?.valid) {
          setMessage(response.data.message);
          setUserDetails(response.data.details);
        }
        if (!response.data) {
          setMessage("validation of token did not work");
        }
      } catch (error) {
        console.log("the validation error => ", error);
        if (error instanceof axios.AxiosError) {
          console.log("the error => ", error?.response?.data);
        }
      }
    };
    allProducts();
  }, []);
  return (
    <AuthContext.Provider
      value={{ userDetails, setUserDetails, message, setMessage }}
    >
      {children}
    </AuthContext.Provider>
  );
};

//product context...
export const ProductContext = createContext();

export const useProductContext = () => {
  return useContext(ProductContext);
};

export const ProductContextProvider = ({ children }) => {
  const [product, setProduct] = useState([]);
  const [randomArray, setRandom] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          "https://eazy-market-server.onrender.com/product/all",
          { withCredentials: true }
        );

        const productData = response.data.products;
        //shuffle the array to display product randomly and not orderly
        const shuffledArray = [...productData];
        for (let i = shuffledArray.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));

          [shuffledArray[i], shuffledArray[j]] = [
            shuffledArray[j],
            shuffledArray[i],
          ];
        }
        setProduct(productData);
        setRandom(shuffledArray);
      } catch (error) {
        console.log("Error:", error.response?.data);
      }
      setLoading(false);
    };

    fetchProducts();
  }, []);

  return (
    <ProductContext.Provider
      value={{
        product,
        setProduct,
        randomArray,
        setRandom,
        loading,
        setLoading,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
