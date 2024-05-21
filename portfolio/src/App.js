
import './App.css';
import Navbar from './components/Navbar';
// import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      {/* <Router> */}
        <Navbar />

        {/* <Routes>
          <Route path="/contact" component={ContactMe} />
          <Route path="/skills" component={Skills} />
          <Route path="/projects" component={Projects} />
          <Route path="/bio" component={Bio} />
          <Route path="/header" component={Header} />
        </Routes> */}
      {/* </Router> */}
    </div>
  );
}

export default App;
