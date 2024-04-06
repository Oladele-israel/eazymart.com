import React from "react";
import ProductCard from "../product-page component/product-card";

const PopularProduct = () => {
  return (
    <div className=" w-[90vw] ml-auto mr-auto flex flex-col justify-items-center mb-10 mt-[-2rem] ">
      <div className="flex justify-between w-[100%] p-8">
        <div className="text-4xl font-bold">Popular Product</div>
        <button className="bg-orange-500 text-white text-lg p-4 w-[170px] rounded-lg">
          View all
        </button>
      </div>
      {/*product display */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-y-4 justify-items-center mt-4 ">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
};

export default PopularProduct;