import "./App.css";
// import Header from "./coponents/singUPHome/Header";

import Home from "./coponents/Home";
import { Routes, Route } from "react-router-dom";

import Subscribe from "./coponents/Subscribe";
function App() {
  // console.log(process.env);
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/subscription" element={<Subscribe />} />
      </Routes>
    </div>
  );
}

export default App;
