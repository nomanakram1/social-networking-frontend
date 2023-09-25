import React from "react";

const TabCard = ({ title, active }) => {
  return (
    <div
      className={`${
        active ? "bg-[#FF4400] text-white" : "bg-white"
      }  mx-5 cursor-pointer text-sm font-medium hover:bg-[#FF4400] hover:bg-opacity-100 px-4 py-1 rounded-md hover:text-white`}
    >
      {title}
    </div>
  );
};

export default TabCard;
