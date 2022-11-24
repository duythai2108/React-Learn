import { useState } from "react";
import "./App.scss";
import Dropdown from "./components/Dropdown";
// import Blog from "./components/Blog";
// import HackerNews from "./components/news/HackerNews";
import HackerNewsWithHook from "./components/news/HackerNewsWithHook";
import SidebarMenu from "./components/SidebarMenu";
import useClickOutSide from "./hooks/useClickOutSide";
// import Dropdown from "./components/Dropdown";
// import Input from "./components/Input";
// import TextareaAutoResize from "./components/TextareaAutoResize";
// import StopWatch from "./components/StopWatch";
// import React, { useEffect, useRef, useState } from "react";
// import Card from "./components/card/Card";
// import Card2 from "./components/card/Card2";
// import CardList from "./components/card/CardList";
// import CardTailwind from "./components/card/CardTailwind";
// import Counter from "./components/counter/Counter";
// import Header from "./components/Header";
// import Timer from "./components/Timer";
// import Photos from "./components/photo/Photos";
// import HackerNews from "./components/news/HackerNews";
// import HackerNewsWithReducer from "./components/news/HackerNewsWithReducer";
// import { GlobalStyles } from "./GlobalStyles";
// import { ThemeProvider } from "styled-components";
// const theme = {
//   colors: {
//     orange: "#ffa440",
//   },
// };
// JSX: Javascript XML
// ES6
// Babel
// parent component
function App() {
  // const [show, setShow] = useState(false);
  const { show, setShow, nodeRef } = useClickOutSide();
  return (
    <div>
      <button
        onClick={() => setShow(true)}
        className="inline-block m-3 p-3 rounded-lg text-white bg-green-300"
      >
        Show menu
      </button>
      <SidebarMenu show={show} ref={nodeRef}></SidebarMenu>
      <Dropdown></Dropdown>
    </div>
  );
}
export default App;
