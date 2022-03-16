import React from 'react';
import './App.css';
import Home from '../components/Home/Home'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Configure from '../components/Configure/Configure'
import {
  BrowserRouter as 
  Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
          <Routes>
            <Route path="/configure" element={<Configure/>}/>
            <Route path="/" element={<Home/>}/>
          </Routes>
          <Footer/>
      </ Router>
    </div>
  );
}

export default App;