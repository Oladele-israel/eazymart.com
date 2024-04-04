import React from "react";
import ProductCard from "./product-card";

const ProductDisplaySection = () => {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex justify-between items-center bg-slate-50 p-3">
        <p className="text-5xl font-extrabold text-center">Men's shoes</p>
        <button className="rounded-2 flex flex-row gap-10 items-center justify-center border-2 p-2 border-slate-300 rounded-lg w-[274px] h-[51px] text-xl">
          <span> sort by:</span>
          <span>
            <select name="" id="">
              <option value="">relevance</option>
              <option value="">clothing</option>
              <option value="">computers</option>
              <option value="">laptops</option>
            </select>
          </span>
        </button>
      </div>
      {/**this is the card display section */}
      <div className="flex flex-wrap gap-4">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
};

export default ProductDisplaySection;
