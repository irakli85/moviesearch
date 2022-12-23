import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signin from './components/Signin';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App/>}></Route>
        <Route path='/signin' element={<Signin/>}></Route>
      </Routes>
    </BrowserRouter>    
  </>
);


