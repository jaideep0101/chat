import React from 'react';
import "./App.css"
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import {Chat,Login,Register} from "./pages/index";
const App = () => {
  return (
   <BrowserRouter>
    <Routes>
        <Route path="/" element={<Chat/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>

    </Routes>
   </BrowserRouter>
  )
}

export default App