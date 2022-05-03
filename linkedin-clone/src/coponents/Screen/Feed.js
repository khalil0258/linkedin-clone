import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../../Firebase";

function Feed() {
  const sign = () => {
    signOut(auth);
  };
  return (
    <div>
      <button onClick={sign}>sign out</button>
    </div>
  );
}

export default Feed;
