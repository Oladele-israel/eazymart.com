import lastBanner from "../../assets/images/miloBanner.png";
import ProductCard from "../product-page component/product-card";

const SpecialProduct = () => {
  return (
    <div className=" w-[100vw] ml-auto mr-auto flex flex-col justify-items-center bg-slate-50 mb-32 ">
      <div className="flex justify-between gap-x-3  w-[90%] p-8 self-center">
        <div className="text-2xl md:text-4xl font-bold text-black">
          Special Offer | up to 60% off
        </div>
      </div>
      {/*product display */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-y-4 justify-items-center mt-2  w-[90%] self-center ">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
      {/**last add banner
       */}
      <div className="bg-slate-300 mt-20 w-[90vw] h-10 ml-auto mr-auto">
        <img src={lastBanner} alt="" className="h-[150px]" />
      </div>
    </div>
  );
};

export default SpecialProduct;
//<div
