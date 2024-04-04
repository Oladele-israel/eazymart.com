import nikeShoe from "../../assets/images/nikeShoe.png";
import nikeTagLine from "../../assets/images/nikeTagline.png";

const ProductHero = () => {
  return (
    <div className="w-[100%] bg-[#75FD75] h-[324px] flex flex-row items-center p-10 ">
      <div className=" w-[45%] p-10 flex flex-col gap-[1.5rem]">
        <p className="text-5xl text-left font-extrabold capitalize leading-tight">
          mouth-watering deals on men's <br /> shoes
        </p>
        <button className="text-2xl bg-slate-50 w-[15rem] uppercase font-bold p-7 rounded-xl">
          shop now
        </button>
      </div>
      <div className="w-[50%] h-full ">
        <img src={nikeShoe} alt="nike trainer shoes" className="mt-[-2.3rem]" />
        <img
          src={nikeTagLine}
          alt="the_tagline"
          className=" w-[12rem] h-[8rem] mt-[-8rem] ml-[25rem]"
        />
      </div>
    </div>
  );
};

export default ProductHero;
