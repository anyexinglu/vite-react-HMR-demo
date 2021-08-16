import React from "react";
import ReactDom from "react-dom";
import Hello from "./Hello.jsx";
export default function App() {
  return (
    <div>
      App
      <Hello />
    </div>
  );
}
ReactDom.render(<App />, document.getElementById("root"));
