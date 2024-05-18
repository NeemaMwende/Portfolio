
import './App.css';
import Bio from './components/Bio';
import ContactMe from './components/ContactMe';
import Footer from './components/Footer';
import Header from './components/Header';
import Projects from './components/Projects';
import Skills from './components/Skills';
// import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      {/* <Router> */}
        <Header />
        <ContactMe />
        <Skills />
        <Projects />
        <Bio />
        <Footer />

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
