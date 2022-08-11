import React from "react";
import {Routes, Route} from 'react-router-dom'
import Home from "./componentes/Home/Home";

import s from './App.module.css'

function App() {
  return (
    <div className={s.app}>
      <Routes>
        <Route path='/' element={<Home/>}/>
        
      </Routes>
    </div>
  );
}

export default App;
