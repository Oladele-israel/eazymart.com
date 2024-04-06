import ProductCard from "../product-page component/product-card";

const NewProduct = () => {
  return (
    <div className=" w-[100vw] h-[1000px] md:h-[600px] ml-auto mr-auto flex flex-col justify-items-center bg-orange-500  mb-10">
      <div className="flex justify-between w-[90%] p-8 self-center">
        <div className="text-4xl font-bold text-slate-50">New Product</div>
        <button className="bg-white text-orange-500 text-lg p-4 w-[170px] rounded-lg">
          View all
        </button>
      </div>
      {/*product display */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-y-4 justify-items-center mt-2  w-[90%] self-center ">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
};

export default NewProduct;
