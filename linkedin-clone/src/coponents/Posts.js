import React from "react";
import { auth } from "../Firebase";

function Posts({ post, time }) {
  const T = new Date(time?.toDate()).getMinutes();
  //   let dat = new Date();
  //   console.log(dat.);
  //   console.log(T);
  return (
    <div className="flex-col gap-5 bg-white rounded  px-6 w-full mb-4 ">
      <div className="flex gap-4 py-4   items-center  ">
        <img
          src={auth.currentUser.photoURL}
          alt=""
          className="h-10 w-10 rounded-3xl"
        />
        <div className="self-start flex-col items-start ">
          <h4 className="text-sm text-bold ">{auth.currentUser.displayName}</h4>
          <span className="text-xs bottom-1 relative text-slate-500">
            {T}'s
          </span>
        </div>
      </div>
      <div className="h-auto min-h-4 w-auto text-sm text-light mb-4 ">
        {post}
      </div>
      <div
        className="flex items-center  border border-t-1 border-slate-500 border-b-0 border-r-0 border-l-0 "
        s
      >
        <a
          href="#"
          className="flex-1 py-2 text-sm text-center text-slate-500 hover:text-slate-800"
        >
          Jaime
        </a>
        <a
          href="#"
          className="flex-1 py-2 text-sm text-center text-slate-500 hover:text-slate-800"
        >
          Comment
        </a>
        <a
          href="#"
          className="flex-1 py-2 text-sm text-center text-slate-500 hover:text-slate-800"
        >
          Partager
        </a>
        <a
          href="#"
          className="flex-1 py-2 text-sm text-center text-slate-500 hover:text-slate-800"
        >
          Envoyer
        </a>
      </div>
    </div>
  );
}

export default Posts;
