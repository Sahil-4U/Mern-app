import React from 'react';
import Navbar from './components/Navbar';
import Alldata from './components/Alldata';
import Update from './components/Update';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import './App.css';
import Create from './components/Create';

function App() {
  return (
   <div>
    
    <Router>
    <Navbar/>
      <Routes>
        <Route path='/createUser' element={<Create/>}/>
        <Route path='/allposts' element={<Alldata/>}/>
        <Route path='/:id' element={<Update/>}/>
      </Routes>
    </Router>
   </div>
  );
}

export default App;
