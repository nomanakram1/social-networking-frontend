import React from "react";
import GroupTab from "../leftSidebar/widget/groupTab";

const RightSidebar = () => {
  return (
    <div>
      <div className="bg-white w-64 rounded-lg px-5 py-3">
        <div>Suggested for you</div>
        <GroupTab
          image="https://play-lh.googleusercontent.com/WTBMP9GDlhMpydKHYlBe3-P7B2mxS24DPMNAm3Qm6HuWgYTMTz1QuDi6D6EIuzFcSv5R"
          title="Alexa"
        />{" "}
        <GroupTab
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxsNMEQRGtDwDjFCWOfyrzN6GQ-qm_fvTiG2cieuHyj2z90eSfuygj9SCaeig7DHlWQps&usqp=CAU"
          title="Stifan"
        />
        <GroupTab
          image="https://shayariholic.com/wp-content/uploads/2022/09/whatsapp-dp-86-983x1024.jpg"
          title="Junaid"
        />
        <GroupTab
          image="https://mybestbio.com/wp-content/uploads/2022/09/1_whatsapp-dp-mybestbio.com_-300x300.jpg"
          title="Ken"
        />
        <GroupTab
          image="https://tostatus.in/wp-content/uploads/2023/02/Single-Boy-for-Whatsapp-DP-Download-2023-1024x1024.jpg"
          title="Jack"
        />{" "}
        <GroupTab
          image="https://images.statusfacebook.com/profile_pictures/creative/creative-whatsapp-dp-02.jpg"
          title="Adam"
        />
        <div className="flex justify-center text-[#FF4400] text-sm cursor-pointer hover:bg-[#FF4400] hover:bg-opacity-100 mt-2 py-1 rounded-md hover:text-white">
          See all
        </div>
      </div>
    </div>
  );
};

export default RightSidebar;
