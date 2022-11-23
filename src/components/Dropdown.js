import React, { useEffect, useRef, useState } from "react";

const Dropdown = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropDownRef = useRef();
  useEffect(() => {
    function handleClickOutDropDown(e) {
      if (dropDownRef.current && !dropDownRef.current.contains(e.target)) {
        setShowDropdown(false);
      }
      // else {
      //   console.log("CLick inside");
      // }
    }
    document.addEventListener("click", handleClickOutDropDown);
    return () => {
      document.removeEventListener("click", handleClickOutDropDown);
    };
  }, []);
  return (
    <div className="relative w-full max-w-[400px]" ref={dropDownRef}>
      <div
        className="p-5 border border-gray-200 rounded-lg w-full cursor-pointer"
        onClick={() => setShowDropdown(!showDropdown)}
      >
        Selected
      </div>
      {showDropdown && (
        <div className=" border border-gray-200 rounded-lg absolute top-full left-0 w-full bg-white">
          <div className="p-5 cursor-pointer">Javascript</div>
          <div className="p-5 cursor-pointer">Reactjs</div>
          <div className="p-5 cursor-pointer">VUE JS</div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
