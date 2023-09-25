import React, { useEffect, useState } from "react";
import GroupTab from "./widget/groupTab";
import { useDispatch, useSelector } from "react-redux";
import {
  allAppartmentApi,
  allAppartmentData,
  allFeedApi,
  allResidentApi,
  allResidentData,
} from "../../redux/features/feed/feedSlice";
const LeftSidebar = () => {
  const dispatch = useDispatch();
    // Maintain state for selected apartment and resident
    const [selectedAppartment, setSelectedAppartment] = useState(null);
    const [selectedResident, setSelectedResident] = useState(null);
  
  useEffect(() => {
    dispatch(allResidentApi());
    dispatch(allAppartmentApi());
  }, [dispatch]);
  const appartmentData = useSelector(allAppartmentData);
  const residentData = useSelector(allResidentData);

  useEffect(() => {
    // Fetch feeds when a specific apartment or resident is selected
    if (selectedAppartment) {
      dispatch(allFeedApi({ appartment_id: selectedAppartment }));
    } else if (selectedResident) {
      dispatch(allFeedApi({ resident_id: selectedResident }));
    }
  }, [dispatch, selectedAppartment, selectedResident]);

  const handleAppartmentClick = (appartment) => {
    setSelectedAppartment(appartment);
    setSelectedResident(null); // Reset selected resident
  };

  const handleResidentClick = (resident) => {
    setSelectedResident(resident);
    setSelectedAppartment(null); // Reset selected apartment
  };

  return (
    <div>
      <div className="bg-white w-64 rounded-lg px-5 py-3 ">
        <div>My Groups</div>
        {Array.isArray(appartmentData) &&
          appartmentData.map((item) => (
            <GroupTab
              image="https://e1.pxfuel.com/desktop-wallpaper/939/595/desktop-wallpaper-the-best-14-whatsapp-group-friendship-friends-group-dp.jpg"
              title={item.name}
              onClick={() => handleAppartmentClick(item.id)} // Handle click event
            />
          ))}

        <div className="flex justify-center text-[#FF4400] text-sm cursor-pointer hover:bg-[#FF4400] hover:bg-opacity-100 mt-2 py-1 rounded-md hover:text-white">
          See all
        </div>
      </div>

      <div className="bg-white w-64 rounded-lg px-5 py-3 mt-5">
        <div>My Friends</div>
        {Array.isArray(residentData) &&
          residentData.map((item) => (
            <GroupTab
              image="https://e1.pxfuel.com/desktop-wallpaper/939/595/desktop-wallpaper-the-best-14-whatsapp-group-friendship-friends-group-dp.jpg"
              title={item.name}
              onClick={() => handleResidentClick(item.id)} // Handle click event
            />
          ))}
        <div className="flex justify-center text-[#FF4400] text-sm cursor-pointer hover:bg-[#FF4400] hover:bg-opacity-100 mt-2 py-1 rounded-md hover:text-white">
          See all
        </div>
      </div>
    </div>
  );
};

export default LeftSidebar;
