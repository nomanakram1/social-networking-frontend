import React from "react";

const GroupTab = ({ image, title, onClick }) => {
  const handleClick = () => {
    if (onClick) {
      onClick(); // Invoke the clickFn if it's provided
    }
  };
  return (
    <div className="flex items-center mt-2 cursor-pointer hover:bg-[#FAFAFA] rounded-md" onClick={handleClick}>
      <img
        src={image}
        alt={title}
        className="w-10 h-10 rounded-md object-cover"
      />
      <div className="text-base font-medium ml-1">{title}</div>
    </div>
  );
};

export default GroupTab;
