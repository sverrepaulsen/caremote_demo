import React from 'react';
import './App.css';
import Home from '../components/Home/Home'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Store from '../components/Store/Store'
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
            <Route path="/store" element={<Store/>}/>
            <Route path="/" element={<Home/>}/>
          </Routes>
          <Footer/>
      </ Router>
    </div>
  );
}

export default App;