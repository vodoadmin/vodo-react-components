import React from "react";
import Test from "./Pages/Test";
// import Test from "./Pages/Test";
// import InputFile from "./Components/Main-Components/input-file";
import { BrowserRouter as Router } from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="w-screen h-screen bg-neutral-100">{<Test />}</div>;
    </Router>
  );
}

export default App;
