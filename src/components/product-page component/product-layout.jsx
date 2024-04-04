import React from "react";
import ProductHero from "./product-hero";
import ProductDisplaySection from "./productDisplaySection";
import ProductSort from "./ProductSort";

const ProductLayout = () => {
  return (
    <div className="h-100vh w-[100%] flex flex-row gap-9">
      <div className="bg-slate-300 w-[22vw] h-[600px] ">
        <ProductSort />
      </div>

      <div className="flex flex-col w-[70vw] gap-10">
        <ProductHero />
        <ProductDisplaySection />
      </div>
    </div>
  );
};

export default ProductLayout;
