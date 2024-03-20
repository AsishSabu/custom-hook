import React from "react";
import "./style.css";
import useRandomNumber from './hook'

export default function App() {
  const data=useRandomNumber();
  return (
    <div>
      <h1>Hello StackBlitz!{data()}</h1>
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}
