import React, { useRef, useState } from "react";
import PhotoSizeSelectActualIcon from "@mui/icons-material/PhotoSizeSelectActual";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ArticleIcon from "@mui/icons-material/Article";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../Firebase";

function Input() {
  const inputRef = useRef();
  const postData = async (e) => {
    e.preventDefault();
    console.log(inputRef.current.value);
    let post = inputRef.current.value;
    if (post.trim() !== "") {
      console.log("ok");
      await addDoc(collection(db, "posts"), {
        post: post,
        time: serverTimestamp(),
      });
      //   document.getElementsByTagName("input").value = "";
    } else {
      alert("entrer un valide post");
    }
  };

  return (
    <div className="p-4 bg-white rounded-lg">
      <form onSubmit={postData}>
        <div className="flex gap-3 items-center">
          <img
            src={require("../assets/feedHead.jpg")}
            alt=""
            className="h-10 w-10 rounded-3xl"
          />

          <input
            type="text"
            ref={inputRef}
            placeholder="commencer un post"
            className="p-2 border border-1 border-gray-400 flex-1 rounded-3xl text-xs placeholder:text-xs capitalize color-slate-800 outline-none "
          />
        </div>
      </form>
      <div className="mt-4 flex items-center content-between text-sm  gap-3  ">
        <div className="flex-grow flex items-center cursor-pointer">
          <PhotoSizeSelectActualIcon
            fontSize="small"
            style={{ color: "skyBlue" }}
          />
          <p className="ml-1 color-slate-300">Photo</p>
        </div>
        <div className="flex-grow flex items-center cursor-pointer">
          <VideoLibraryIcon fontSize="small" style={{ color: "green" }} />
          <p className="ml-1 color-slate-300">Video</p>
        </div>
        <div className="flex-grow flex items-center cursor-pointer">
          <CalendarMonthIcon fontSize="small" style={{ color: "orange " }} />
          <p className="ml-1 color-slate-300">Evenement</p>
        </div>
        <div className="flex-grow flex flex-nowrap items-center cursor-pointer">
          <ArticleIcon fontSize="small" style={{ color: "pink" }} />
          <p className="ml-1 color-slate-300">Rediger un article</p>
        </div>
      </div>
    </div>
  );
}

export default Input;
