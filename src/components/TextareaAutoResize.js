import React, { useEffect, useRef, useState } from "react";

const TextareaAutoResize = () => {
  const [text, setText] = useState("demo");
  const textAreaRef = useRef(null);
  const [textareaHeight, setTextareaHeight] = useState("auto");
  // const [parentHeight, setParentHeight] = useState("auto");

  const handleChange = (event) => {
    setTextareaHeight("auto");
    // setParentHeight(`${textAreaRef?.current?.scrollHeight}px`);

    setText(event.target.value);
  };

  useEffect(() => {
    setTextareaHeight(`${textAreaRef?.current?.scrollHeight}px`);
    // setParentHeight(`${textAreaRef?.current?.scrollHeight}px`);
  }, [text]);
  return (
    <div className="p-5">
      <textarea
        className="w-full transition-all overflow-hidden max-w-[400px] rounded-lg border border-gray-300 focus:border-blue-300 resize-none"
        placeholder="Please enter your content..."
        value={text}
        ref={textAreaRef}
        style={{
          height: textareaHeight,
        }}
        onChange={handleChange}
      ></textarea>
    </div>
  );
};

export default TextareaAutoResize;
