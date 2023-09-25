import React from "react";
import { BsThreeDots } from "react-icons/bs";
import { BsImages } from "react-icons/bs";
import { GrEmoji } from "react-icons/gr";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { FaRegCommentDots } from "react-icons/fa";
import { PiShareThin } from "react-icons/pi";
import { apiConst } from "../../../constants/api.constants";
const FeedCard = ({ data }) => {
  return (
    <div>
      
        <div className="bg-white rounded-lg px-3 py-3 mt-2">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxsNMEQRGtDwDjFCWOfyrzN6GQ-qm_fvTiG2cieuHyj2z90eSfuygj9SCaeig7DHlWQps&usqp=CAU"
                alt="Stifan"
                className="w-12 h-12 rounded-md object-cover"
              />
              <div className="text-lg font-medium ml-1">
                {data.resident_name}
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <div className="text-gray-400 text-xs">
                Appartment: {data.apartment_name}
              </div>
              <button>
                <BsThreeDots />
              </button>
            </div>
          </div>
          <div className="line-clamp-2 my-2 font-medium">{data.message}</div>
          <div className="line-clamp-2 mb-2">{data.description}</div>
          <hr />
          <div className="flex items-center my-2">
            <div className="hidden h-10 w-14 border-2 border-[#FF4400] rounded-md overflow-hidden mr-2 md:block">
              <img
                src="https://imgv3.fotor.com/images/gallery/Realistic-Male-Profile-Picture.jpg"
                alt="Profile"
                className="w-full h-full object-cover "
              />
            </div>
            <div className="hidden md:flex justify-between rounded-md- px-3 py-2 bg-[#FAFAFA] space-x-2 ">
              <input
                type="text"
                placeholder="Add a comment..."
                className="bg-[#FAFAFA] focus:outline-none"
                readOnly
              />
              <button>
                <BsImages className="text-[#C5D0E6] text-xl" />
              </button>
              <button>
                <GrEmoji className="text-[#C5D0E6] text-xl" />
              </button>
            </div>
            <div className="flex w-full sm:justify-between md:justify-end items-center space-x-5">
              <button className="flex items-center space-x-1">
                <MdOutlineFavoriteBorder className="text-[#C5D0E6] text-xl" />{" "}
                <div className="text-[#C5D0E6]">70</div>
              </button>
              <button className="flex items-center space-x-1">
                <FaRegCommentDots className="text-[#C5D0E6] text-xl" />
                <div className="text-[#C5D0E6]">35</div>
              </button>
              <button className="flex items-center space-x-1 ">
                <PiShareThin className="text-[#C5D0E6] text-xl" />
                <div className="text-[#C5D0E6]">8</div>
              </button>
            </div>
          </div>
        </div>
    </div>
  );
};

export default FeedCard;
