import React, { useState } from "react";

export default function Reverse() {
  const [val, setVal] = useState("");
  function reverse1() {
    let rev = "";
    for (let i = val.length - 1; i >= 0; i--) {
      rev = rev + val[i];
    }
    console.log(rev);
    setVal(rev);
  }
  return (
    <>
      <h1 onClick={() => reverse1()}>{val}</h1>
      <input
        value={val}
        onChange={(e) => {
          setVal(e.target.value);
        }}
      />
    </>
  );
}
