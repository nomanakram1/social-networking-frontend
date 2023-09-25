import React, { useState } from "react";
import { AiOutlineEdit } from "react-icons/ai";
import { BsImages } from "react-icons/bs";
import { GrEmoji } from "react-icons/gr";
import ModalComponent from "./modalComponent";
const WriteFeed = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="w-full bg-white px-3 py-2 rounded-lg">
      <div className="flex items-center justify-between rounded-md- px-3 py-2 bg-[#FAFAFA] border border-gray-500">
        <input
          type="text"
          placeholder="What's on your mind?"
          className="bg-[#FAFAFA] focus:outline-none"
          onClick={handleOpenModal}
        />
        <AiOutlineEdit />
      </div>
      <div className="flex mt-4 justify-evenly ">
        <div className="flex items-center space-x-3 cursor-pointer hover:bg-[#FAFAFA] rounded-md">
          <div>Media</div>
          <BsImages className="text-green-700 text-3xl " />
        </div>
        <div className=" flex  items-center space-x-3 cursor-pointer hover:bg-[#FAFAFA] rounded-md">
          <div>Feeling/Activity</div>
          <GrEmoji className="text-blue-700 text-3xl" />
        </div>
      </div>
      {/* Render the ModalComponent */}
      <ModalComponent open={isModalOpen} handleClose={handleCloseModal} />
    </div>
  );
};

export default WriteFeed;
