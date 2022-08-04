
import React from "react";
import { BrowserRouter , Routes, Route } from "react-router-dom";

import './App.css';



import { Header } from "./components/Header.js";
import { UserData } from "./components/UserData";
import Home  from "./components/Home";
function App() {
  return (
    <BrowserRouter>
     <div className="App">
     <Header/>
    
   
    <Routes>
    <Route exact path="/" element={<UserData />}/>
    <Route exact path="/home" element={<Home />}/>

   
    </Routes>
    </div>
    </BrowserRouter>
  
  );
}

export default App;





