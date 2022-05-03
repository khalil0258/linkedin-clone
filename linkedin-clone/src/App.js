import "./App.css";
// import Header from "./coponents/singUPHome/Header";

import Home from "./coponents/Home";
import { Routes, Route } from "react-router-dom";

import Subscribe from "./coponents/Subscribe";
import Feed from "./coponents/Screen/Feed";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./Firebase";
function App() {
  // console.log(process.env);
  const [logedIn, setLogedIn] = useState();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setLogedIn(true);
        console.log(user.uid);
      } else {
        setLogedIn(false);
      }
    });
  }, []);
  return (
    <div className="app">
      {logedIn ? (
        <Feed />
      ) : (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/subscription" element={<Subscribe />} />
        </Routes>
      )}
    </div>
  );
}

export default App;
