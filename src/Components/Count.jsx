import { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom/client";

export default function Count() {
  const [inputValue, setInputValue] = useState("");
  const [kevin, setKevin] = useState(null);
  const count = useRef(0);

  // console.log(count.current)

  useEffect(() => {
    count.current = count.current + 1;
  });

  return (
    <div className="flex p-10">
      <input
       className="ring-1 ring-red-500"
        autoFocus={true}
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <h1>Render Count: {count.current}</h1>
    </div>
  );
}