import React , {Component} from 'react';
import {render} from 'react-dom';
import './App.css';
import Homepage from './components/Homepage';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';


const App = () => {
  return (
    <div>
        <div className='nav'>
            <Navbar/>
        </div>
     <div className='side_nav'>
        <Sidebar/>
     </div>
     <div className='homepage'>
        <Homepage/>
     </div>
    </div>
  )
}

export default App

