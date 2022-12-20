// import { Fragment, useState } from "react";
import { useState } from "react";
import "./App.scss";
import Modal from "./components/modal/Modal";
import ModalAdvanced from "./components/modal/ModalAdvanced";
import ModalBase from "./components/modal/ModalBase";
import Portal from "./components/Portal";
import TooltipAdvanced from "./components/tooltip/TooltipAdvanced";
// import Dropdown from "./components/Dropdown";
// import DropdownPortal from "./components/DropdownPortal";
// import SignUpFormFinal from "./components/form/SignUpFormFinal";
// import SignUpFormHook from "./components/form/SignUpFormHook";
// import Modal from "./components/modal/Modal";
// import Game from "./components/tictactoe/Game";
// import Tooltip from "./components/Tooltip";
// import { ErrorBoundary } from "react-error-boundary";

// import Form from "./components/form/Form";
// import SignUpForm from "./components/form/SignUpForm";
// import SignUpFormV2 from "./components/form/SignUpFormV2";
// import MovieSearchApp from "./components/MovieSearchApp";
// import Input from "./components/form/Input";
// import Dropdown from "./components/Dropdown";
// import Blog from "./components/Blog";
// import HackerNews from "./components/news/HackerNews";
// import HackerNewsWithHook from "./components/news/HackerNewsWithHook";
// import SidebarMenu from "./components/SidebarMenu";
// import useClickOutSide from "./hooks/useClickOutSide";
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
// function ErrorFallback({ error, resetErrorBoundary }) {
//   return (
//     <div role="alert" className="p-5 bg-red-100">
//       <p className="text-red-600">Khong the lay data do component dang loi</p>
//       <button onClick={resetErrorBoundary}>Try again</button>
//     </div>
//   );
// }

function App() {
  // const [showModal, setShowModal] = useState(false);
  const [openModalBase, setOpenModalBase] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  return (
    <div className="p-5 flex justify-center items-center h-screen">
      <button
        className="p-5 rounded-lg text-white text-center bg-blue-500"
        onClick={() => setOpenModalBase(true)}
      >
        Open modal base
      </button>
      <button
        className="p-5 rounded-lg text-white text-center bg-blue-500 ml-5"
        onClick={() => setOpenModal(true)}
      >
        Open modal
      </button>
      <ModalBase
        visible={openModalBase}
        onClose={() => setOpenModalBase(false)}
      >
        <div className="bg-white p-10 rounded-lg w-full max-w-[320px]">
          <TooltipAdvanced title="Tooltip2">This is tooltip 2</TooltipAdvanced>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa in
          vitae sequi dolor deleniti, illum pariatur, maiores odit fugiat cumque
          aspernatur voluptatibus dolore non impedit illo quia. Eveniet, porro
          nulla?
        </div>
      </ModalBase>
      <ModalAdvanced
        onClose={() => setOpenModal(false)}
        visible={openModal}
        heading="Welcome back !"
        bodyClassName="w-full max-w-[400px] bg-white p-10 rounded-lg"
      >
        <div className="flex flex-col gap-3 mb-5">
          <label htmlFor="email" className="text-sm cursor-pointer">
            Email address
          </label>
          <input
            type="text "
            className="w-full text-sm leading-normal bg-[#E7ECF3] rounded-lg p-4"
            placeholder="Enter your email"
          />
        </div>
        <div className="flex flex-col gap-3 mb-5">
          <label htmlFor="password" className="text-sm cursor-pointer">
            Password
          </label>
          <input
            type="password "
            className="w-full text-sm leading-normal bg-[#E7ECF3] rounded-lg p-4"
            placeholder="Enter your password"
          />
        </div>
        <button className="w-full p-4 text-base font-semibold text-white bg-[#316BFF] rounded-lg">
          Sign in
        </button>
      </ModalAdvanced>
      <div className="inline-block ml-5">
        <TooltipAdvanced title="Tooltip">This is a tooltip</TooltipAdvanced>
      </div>
    </div>
  );
}
export default App;
