import React, { Fragment } from 'react';
import Header from './common/Header';
import {Navigate,Route,Routes} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { BrowserRouter } from 'react-router-dom';
import Home from './common/Home';
import MainTypeScript from './typescript/MainTypeScript';
import MainHooks from './hooks/MainHooks';
import Default from './common/Default';
import { useState } from "react";
function App() {
  return (
      <div>
        <Header/>
        <Routes>
          <Route path='Home' element = {<Home/>} />
          <Route path='typescript' element = {<MainTypeScript/> }/>
          <Route path='/' element = {<MainHooks/>} />
          <Route path='default' element = {<Default/>} />
          <Route path='/*' element = {<Navigate to={ 'default' }/>} />
        </Routes>
      </div>
  );
}

export default App;
