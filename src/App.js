import React from "react";
import "./App.css";
import NavMenu from "./components/NavMenu";
import CardSlider from "./components/CardSlider";
import Popup from "./components/Popup/Popup";

export default function App() {
  return (
    <>
      <NavMenu />
      <Popup />
      <CardSlider />
    </>
  );
}
