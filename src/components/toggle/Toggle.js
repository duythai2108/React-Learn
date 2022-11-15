import React, { useState } from "react";
import "./ToggleStyles.css";
// stateless functional component: component nhung khong su dung state
// function Toggle() {
//   return <div className="toggle"></div>
// }
// stateful functional component: component co su dung state
// function Toggle2() {
//   return (
// const [count, setCount] = useState();
//     <div className="toggle"></div>;
//   )
// }

function Toggle() {
  // 1. enable state: useState(initialize state)
  // 2. Initialize state: useState(false)
  // 3. Reding state:
  // 4. update state
  // const array = useState(false);
  // console.log(array);
  // console.log(array[0]);
  // console.log(array[1]);
  // const [a, b] = [1, 2];
  // console.log(a, b);
  const [on, setOn] = useState(false);
  console.log(on);
  // setOn(true);
  // console.log(on, setOn);
  //  [title,setTitle];
  //  [isActive,setIsActive];
  // <div className="toggle" onClick="toggle"></div>
  // state change -> re-render
  const handleToggle = () => {
    // setOn(callback) -> setOn(previousState => !previousState)
    setOn((on) => !on);
  };
  return (
    <div>
      <div className={`toggle ${on ? "active" : ""}`} onClick={handleToggle}>
        <div className={`spinner ${on ? "active" : ""}`}></div>
      </div>
      {/* <div className="toggle-control">
        <div className="toggle-on" onClick={() => setOn(true)}>
          On
        </div>
        <div className="toggle-off" onClick={() => setOn(false)}>
          Off
        </div>
      </div> */}
    </div>
  );
}
export default Toggle;
