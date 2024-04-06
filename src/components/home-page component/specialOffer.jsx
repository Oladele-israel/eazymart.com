import lastBanner from "../../assets/images/miloBanner.png";
import ProductCard from "../product-page component/product-card";

const SpecialProduct = () => {
  return (
    <div className=" w-[100vw] ml-auto mr-auto flex flex-col justify-items-center bg-slate-50 ">
      <div className="flex justify-between w-[90%] p-8 self-center">
        <div className="text-4xl font-bold text-black">
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
      <div
        className="w-[85%] h-[250px] bg-contain bg-no-repeat self-center mt-10"
        style={{ backgroundImage: `url(${lastBanner})` }}
      ></div>
    </div>
  );
};

export default SpecialProduct;
//<div
