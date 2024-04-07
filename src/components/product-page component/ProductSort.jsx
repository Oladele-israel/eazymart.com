const ProductSort = () => {
  return (
    <div className="flex flex-col p-5 gap-2">
      {/*browsing categories */}
      <div className="flex flex-col gap-2 ">
        <span className="text-2xl font-bold capitalize text-gray-600">
          Market current category
        </span>
        <span className="capitalize font-semibold text-xl text-slate-600">
          browse other categories
        </span>
      </div>
      {/*browsing oth categories */}
      <div className="flex flex-col gap-2 mt-4">
        <div className="flex items-center gap-2">
          <input type="checkbox" name="" id="computers" className="w-5 h-5 " />
          <label
            htmlFor="computers"
            className="text-lg capitalize text-slate-600 font-semibold"
          >
            computers
          </label>
        </div>

        <div className="flex items-center gap-2">
          <input type="checkbox" name="" id="phones" className="w-5 h-5 " />
          <label
            htmlFor="phones"
            className="text-lg capitalize text-slate-600 font-semibold"
          >
            phones
          </label>
        </div>

        <div className="flex items-center gap-2">
          <input type="checkbox" name="" id="clothing" className="w-5 h-5 " />
          <label
            htmlFor="clothing"
            className="text-lg capitalize text-slate-600 font-semibold"
          >
            clothing
          </label>
        </div>

        <div className="flex items-center gap-2">
          <input type="checkbox" name="" id="accessories" className="w-5 h-5 " />
          <label
            htmlFor="accessories"
            className="text-lg capitalize text-slate-600 font-semibold"
          >
            Accessories
          </label>
        </div>
      </div>
      {/*browsing colors */}
      <div>
        <div className="capitalize font-semibold text-xl text-slate-600 mt-6">
          colour
        </div>
        <div className="flex items-center gap-2">
          <input type="checkbox" name="" id="red" className="w-5 h-5 " />
          <label
            htmlFor="red"
            className="text-lg capitalize text-slate-600 font-semibold"
          >
            Red
          </label>
        </div>
        <div className="flex items-center gap-2">
          <input type="checkbox" name="" id="blue" className="w-5 h-5 " />
          <label
            htmlFor="blue"
            className="text-lg capitalize text-slate-600 font-semibold"
          >
            Blue
          </label>
        </div>
        <div className="flex items-center gap-2">
          <input type="checkbox" name="" id="black" className="w-5 h-5 " />
          <label
            htmlFor="black"
            className="text-lg capitalize text-slate-600 font-semibold"
          >
            black
          </label>
        </div>
        <div className="flex items-center gap-2">
          <input type="checkbox" name="" id="grey" className="w-5 h-5 " />
          <label
            htmlFor="grey"
            className="text-lg capitalize text-slate-600 font-semibold"
          >
            grey
          </label>
        </div>
      </div>
    </div>
  );
};

export default ProductSort;
