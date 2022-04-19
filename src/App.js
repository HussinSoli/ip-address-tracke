import React from "react";
import Header from "./components/Header";
import DisplayInfo from "./components/DisplayInfo";
import Map from "./components/Map";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <main>
        <Map />
        <DisplayInfo />
      </main>
    </>
  );
}

export default App;
