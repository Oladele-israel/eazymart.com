import React from "react";
import { FaCartShopping } from "react-icons/fa6";
import { IoIosStarOutline } from "react-icons/io";

import canImage from "../../assets/images/nikeShoe.png";

const ProductCard = () => {
  return (
    <div className="bg-[#F9F5F5] w-[316px] h-[414px] p-4 flex flex-col gap-4 rounded-2xl">
      <img
        src={canImage}
        alt=""
        className=" w-[293.89px] h-[283.2px] bg-slate-500 p-3 ml-auto mr-auto rounded-md"
      />
      <div>
        <div className="text-neutral-400 text-2xl">Nike Air Max Sneaker</div>
        <div className="flex justify-between mt-2">
          <div className="flex flex-col gap-1">
            <span className="text-xl text-orange-600 font-bold">#119,987.00</span>
            <span className="flex flex-row gap-2 items-center">
              <p className="text-xl">5.0</p>
              <IoIosStarOutline className="text-xl"/>
            </span>
          </div>
          {/**for the second add to cart div */}

          <div className="">
            <span className="flex flex-col items-center gap-1">
              <FaCartShopping className="text-xl text-gray-500"/>
              <p className="text-xl">add to cart</p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
//bg-neutral-800 rounded-2xl w-[100%] h-[70%] ml-auto mr-auto
