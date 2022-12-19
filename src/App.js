// import { Fragment, useState } from "react";
import "./App.scss";
import Modal from "./components/modal/Modal";
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
  return (
    <div>
      {/* <div className="relaive z-0">
        <Modal open={showModal} handleClose={() => setShowModal(false)}></Modal>
      </div>
      <button
        className="p-4 bg-blue-500 text-white rounded-lg"
        onClick={() => setShowModal(true)}
      >
        Show modal
      </button>
      <div className="relative z-30">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam
        aspernatur odio nesciunt a alias aliquam consequatur quos. Ex harum
        laboriosam, cupiditate doloremque consequuntur culpa, tenetur alias sunt
        dolore cumque dolores.
      </div>
      <div className="overflow-hidden p-5">
        <DropdownPortal></DropdownPortal>
      </div> */}
      {/* <div className="p-16 mt-16 ml-16">
        <Tooltip text="Hover me">This is a tooltip content</Tooltip>
      </div> */}
      {/* <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Game></Game>
      </ErrorBoundary>
      <SignUpFormFinal></SignUpFormFinal> */}
      <Modal open={true} handleClose={() => {}}></Modal>
    </div>
  );
}
export default App;
