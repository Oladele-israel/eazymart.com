import axios from "axios";
import HeroSection from "../components/home-page component/HeroSection";
import NewProduct from "../components/home-page component/newproduct";
import PopularProduct from "../components/home-page component/popularProduct";
import ShopCollection from "../components/home-page component/shopfromCollection";
import SpecialProduct from "../components/home-page component/specialOffer";
import { useEffect } from "react";


const HomePage = () => {
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
    <div className="overflow-x-hidden">
      <HeroSection />
      <PopularProduct />
      <NewProduct />
      <SpecialProduct />
      <ShopCollection />
    </div>
  );
};

export default HomePage;
