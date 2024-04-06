import CollectionCard from "./collectionCard";
import phones from "../../assets/images/phones.png";
import accessories from "../../assets/images/accessoris.png";
import clothing from "../../assets/images/clothing.png";
import computers from "../../assets/images/computers.png";

const ShopCollection = () => {
  return (
    <div className=" flex flex-col mt-5  h-[560px] mb-14">
      <div className="flex justify-between w-[90%] p-8 self-center">
        <div className="text-4xl font-bold text-black">
          Shop from our Collection
        </div>
        <button className="bg-orange-500 text-white text-lg p-4 w-[170px] rounded-lg font-extrabold">
          SHOP NOW
        </button>
      </div>
      {/*product display */}
      <div className="flex gap-4 items-center justify-center">
        <CollectionCard imgSrc={phones} colname="phones" />
        <CollectionCard imgSrc={accessories} colname="Accessories" />
        <CollectionCard imgSrc={computers} colname="Computers" />
        <CollectionCard imgSrc={clothing} colname="Clothing" />
      </div>
    </div>
  );
};

export default ShopCollection;
