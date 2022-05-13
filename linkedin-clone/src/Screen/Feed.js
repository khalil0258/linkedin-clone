import React from "react";
import { signOut } from "firebase/auth";

import { auth } from "../Firebase";
import { useNavigate } from "react-router-dom";
import FeedHeader from "../coponents/feedComponents/FeedHeader";
import "./feed.css";

import InfosFeed from "../coponents/InfosFeed";
import RightSection from "../coponents/RightSection";
import CenterFeed from "../coponents/CenterFeed";

function Feed() {
  const navigate = useNavigate();
  const sign = async () => {
    signOut(auth).then(() => {
      navigate("/");
    });
  };
  return (
    <div className="overflow-x-hidden">
      {/* header */}
      <FeedHeader />

      {/* the rest entire page which is devised into three columns */}
      <div
        className="cont"
        //  onClick={sign}
      >
        {/* first colunm-->which has some profile stats  */}
        <InfosFeed />
        {/* second column -->which has the feed post where the posts show up and we can post new publication */}
        <CenterFeed />
        {/* third section --> which has some ad pic and some links [simple part] */}
        <RightSection />
      </div>
    </div>
  );
}

export default Feed;
