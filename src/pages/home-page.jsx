import axios from "axios";
import HeroSection from "../components/home-page component/HeroSection";
import NewProduct from "../components/home-page component/newproduct";
import PopularProduct from "../components/home-page component/popularProduct";
import ShopCollection from "../components/home-page component/shopfromCollection";
import SpecialProduct from "../components/home-page component/specialOffer";
import { useEffect } from "react";


const HomePage = () => {
 
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
