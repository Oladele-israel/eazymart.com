import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

export const AuthContext = createContext();

export const useAuthContext = () => {
  return useContext(AuthContext);
};

export const AuthContextProvider = ({ children }) => {
  const [userDetails, setUserDetails] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const allProducts = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/user/validateToken",
          {
            withCredentials: true,
          }
        );

        console.log("the response from valid => ", response);
        const validUser = response?.data?.success;
        const validUserAdmin = response?.data?.currentUser.isAdmin;

        if (validUser) {
          setMessage(validUser);
        }
        if (validUserAdmin) {
          setUserDetails(validUserAdmin);
        }
      } catch (error) {
        console.log(error);
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
