import React, { useEffect } from "react";
import WriteFeed from "./widget/writeFeed";
import FeedCard from "./widget/feedCard";
import { useDispatch, useSelector } from "react-redux";
import { allFeedApi, allFeedData } from "../../redux/features/feed/feedSlice";

const Feed = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(allFeedApi());
  }, [dispatch]);

  const data = useSelector(allFeedData);

  return (
    <div className="mx-5 sm:w-full">
      <WriteFeed />
      {Array.isArray(data) && data.length > 0 ? (
        data.map((item) => <FeedCard key={item.id} data={item} />)
      ) : (
        <p>No data available</p>
      )}
    </div>
  );
};

export default Feed;
