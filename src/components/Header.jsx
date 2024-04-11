import { FaSearch } from "react-icons/fa";
import { IoPersonOutline } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { TiThMenu } from "react-icons/ti";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import EazymartLogo from "./home-page component/EazymartLogo";
import { useAuthContext } from "./context/auth-context";
import { Link } from "react-router-dom";

const Header = () => {
  const { userDetails, message } = useAuthContext;
  const [isToggle, setIsToggle] = useState(false);
  console.log("this is the message =>", message);
  console.log("this is the user detail=>", userDetails);
  const handleToggle = () => {
    setIsToggle(!isToggle);
  };
  return (
    <div className="w-screen h-[11rem] ">
      <header>
        <div className="w-[100%] flex flex-row bg-slate-50 p-3 justify-evenly ml-auto mr-auto">
          <EazymartLogo />
          {/**this is the search bar */}
          <div className="flex items-center ml-4 border-0 md:border-2 md:border-slate-300 rounded-lg w-[14rem] sm:w-[20rem] md:w-[20rem] p-2 justify-between">
            <input
              type="text"
              placeholder="search"
              className="bg-transparent w-[70%]border-none outline-none hidden md:block "
            />
            <FaSearch className="text-orange-600 " />
          </div>
          {/**this is the account section */}
          <div className="flex items-center gap-1">
            <p className="font-semibold text-[#575454] text-[1.2rem] hidden md:block">
              <select name="" id="">
                <option value="">
                  {userDetails ? message : <Link to="/login">login</Link>}
                </option>
              </select>
            </p>

            <IoPersonOutline className="text-xl" />
          </div>
          {/**this is the favourite list section */}
          <div className="flex items-center gap-1  ">
            <p className="font-semibold text-[#575454] text-[1.2rem] hidden md:block">
              favourites
            </p>
            <FaRegHeart className="text-xl" />
          </div>
          {/**this is the cart section */}
          <div className="flex items-center gap-1">
            <p className="font-semibold text-[#575454] text-[1.2rem] hidden md:block">
              cart-List
            </p>
            <IoCartOutline className="text-xl" />
          </div>
          {/** this is for the responsive haambuger menu*/}
          <div className="flex items-center gap-1  ">
            {isToggle ? (
              <AiOutlineClose
                className="text-4xl text-[#575454] md:hidden"
                onClick={handleToggle}
              />
            ) : (
              <TiThMenu
                className="text-4xl text-[#575454] md:hidden"
                onClick={handleToggle}
              />
            )}
          </div>
        </div>
      </header>
      <nav className=" p-4 shadow-md">
        <ul
          className={`flex flex-col h-[65vh] md:h-14 md:backdrop-blur-0 backdrop-blur-md  gap-5 ${
            isToggle ? "flex " : "hidden"
          } md:flex md:flex-row md:justify-evenly items-center capitalize font-semibold text-black text-[1.1rem]`}
        >
          <li className="hover:bg-slate-400 md:hover:bg-white w-full text-center p-2">
            all categories
          </li>
          <li className="hover:bg-slate-400 hover:cursor-pointer  md:hover:bg-white w-full text-center p-2">
            phones
          </li>
          <li className="hover:bg-slate-400 hover:cursor-pointer md:hover:bg-white  w-full text-center p-2">
            clothing
          </li>
          <li className="hover:bg-slate-400 hover:cursor-pointer  md:hover:bg-white w-full text-center p-2">
            computers
          </li>
          <li className="hover:bg-slate-400 hover:cursor-pointer md:hover:bg-white  w-full text-center p-2">
            accessories
          </li>
          <li className="hover:bg-slate-400 hover:cursor-pointer md:hover:bg-white  w-full text-center p-2">
            shoes
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
//192.168.106.208
//doubt
//discourage
//dillusion
