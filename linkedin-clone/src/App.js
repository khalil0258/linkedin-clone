import "./App.css";
import Header from "./coponents/singUPHome/Header";
import styled from "styled-components";
import heroImg from "./assets/sectionHero1.svg";
function App() {
  console.log(process.env);
  return (
    <div className="app">
      <Header />
 
    </div>
  );
}

export default App;
