
import './App.css';
import Bio from './components/Bio';
import Navbar from './components/Navbar';
// import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <Navbar />
          <div className='container'>
            <Bio />
          </div>
    </div>
  );
}

export default App;
