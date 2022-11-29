import './App.css';
import React from "react";
import PersonList from "./Component/PersonList"
import PersonAdd from "./Component/PersonAdd"
import PersonRemove from "./Component/PersonRemove"

function App() {

  return(
   <div className="App">
     <PersonAdd />
     <PersonList/>
     <PersonRemove />
   </div> 
  )

}

export default App;
