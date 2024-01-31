import { FiSearch } from "react-icons/fi";
import { IoPersonCircleOutline } from "react-icons/io5";
import { PiHandbagSimpleBold } from "react-icons/pi";
import { IoIosMenu } from "react-icons/io";

const Header = () => {
    return (
        <nav className=" container px-2 sm:px-6 lg:px-8 mx-auto py-8 p-6 flex justify-between items-center flex-col md:flex-row">
            <span className="flex justify-between items-center w-full md:w-auto ">
                <h1 className="text-gray-500 text-xl md:text-4xl sm:text-2xl font-bold md:mb-2">sje<span className="text-[#673AB8]">y</span>y</h1>
                <span className="md:hidden" >
                    <IoIosMenu />
                </span>
            </span>
            <div className="flex items-center w-full md:max-w-sm gap-2 p-2 md:p-3 rounded-full mt-5 md:mt-0 bg-gray-100">
                <span className="text-gray-600"><FiSearch size={25} /></span>
                <input type="text" placeholder="Search" className="w-full outline-none bg-transparent text-gray-600" />

            </div>
            <div className=" hidden md:flex gap-4 items-center text-gray-600">
                <span className="cur"><IoPersonCircleOutline size={30} /></span>
                <span><PiHandbagSimpleBold size={30} /></span>
            </div>
        </nav>
    )
}

export default Header