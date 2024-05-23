
import './App.css';
import Bio from './components/Bio';
import Navbar from './components/Navbar';
import Skills from './components/Skills';
// import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <Navbar />
          <div className='container'>
            <Bio />
            <Skills />
          </div>
    </div>
  );
}

export default App;
