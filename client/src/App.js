import React from 'react'
import Header from './components/Header';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Resources from './pages/Resources';
import Workshop from './pages/Workshop';
import Coaching from './pages/Coaching';
import Career from './pages/Career';

// import {getAllProfiles} from './services/profileService.js';

function App() { 
  // const myProfiles = getAllProfiles();
  // console.log(getAllProfiles)
  return ( 
    <div>
    <div className="App">
      <header className="App-header">
              <Router>          
          <Header />
          <Routes>

            <Route path="/" element={<Home />}></Route>
            <Route path="/shop" element={<Shop />}></Route>
            <Route path="/resources" element={<Resources />}></Route>
            <Route path="/workshop" element={<Workshop />}></Route>
            <Route path="/coaching" element={<Coaching />}></Route>
            <Route path="/career" element={<Career />}></Route>

          </Routes>
        </Router>
        {/* <p>{myProfiles}</p> */}


        </header>
        
    </div>
    {/* <h6 style={{alignItems:"center", justifyContent:"center"}}>© Sophia Johnson</h6> */}
    </div>
  );
}

export default App;
