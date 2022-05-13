import "./App.css";
// import Header from "./coponents/singUPHome/Header";

import Home from "./coponents/Home";
import { Routes, Route, useLocation } from "react-router-dom";

import Subscribe from "./coponents/Subscribe";
import Feed from "./Screen/Feed";
import { useEffect, useState, useLayoutEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./Firebase";
import Header from "./coponents/singUPHome/Header";
function App() {
  
  const location = useLocation();
  const [logedIn, setLogedIn] = useState();

  // console.log(process.env.REACT_APP);
  useLayoutEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setLogedIn(true);
        // console.log(user.uid);
      } else {
        setLogedIn(false);
      }
    });
  }, [auth]);
  return (
    <div className="app">
      {logedIn ? (
        <Feed />
      ) : (
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/subscription" exact element={<Subscribe />} />
        </Routes>
      )}
    </div>
  );
}

export default App;
