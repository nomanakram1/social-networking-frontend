import React from "react";
import TabCard from "./widget/tabCard";
import { FiSearch } from "react-icons/fi";

const Header = () => {
  return (
    <div className="w-full flex bg-white h-16  items-center px-11 justify-between">
      <div className="text-lg font-semibold text-[#FF4400]">Social Net</div>
      <div className="hidden md:flex">
        <TabCard title="Feed" active={true} />
        <TabCard title="Events" active={false} />
        <TabCard title="Chat" />
        <TabCard title="Notifications" />
      </div>
      <div className="lg:w-1/3 flex justify-between rounded-md- px-3 py-2 lg:bg-[#FAFAFA]">
        <input
          type="text"
          placeholder="Search..."
          className="hidden bg-[#FAFAFA] focus:outline-none lg:block"
        />
        <FiSearch className="hidden lg:block" />
      </div>
      <div className="flex items-center space-x-4">
        <FiSearch className="lg:hidden sm:block" />
        <div className="h-10 w-10 border-2 border-[#FF4400] rounded-md overflow-hidden">
          <img
            src="https://imgv3.fotor.com/images/gallery/Realistic-Male-Profile-Picture.jpg"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
