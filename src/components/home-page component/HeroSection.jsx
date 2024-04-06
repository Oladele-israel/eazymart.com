import HeroBanner from "../../assets/images/HeroBanner.png";

const HeroSection = () => {
  return (
    <div
      className="w-[90vw] h-[80vh] flex ml-auto mr-auto bg-contain md:bg-cover bg-no-repeat mb-24"
      style={{ backgroundImage: `url(${HeroBanner})` }}
    ></div>
  );
};

export default HeroSection;
