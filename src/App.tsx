import "./App.css";
import React from "react";
import { BriefForm } from "./components/BriefForm/BriefForm";
import { BriefList } from "./components/BriefList/BriefList";

function App() {
  return (
    <div>
      <BriefForm></BriefForm>
      <BriefList></BriefList>
    </div>
  );
}

export default App;
