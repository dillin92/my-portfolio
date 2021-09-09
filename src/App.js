import React from 'react';
import About from './components/About';
import Nav from './components/Nav';
import Portfolio  from './pages/portfolio';
import Footer from './components/Footer'
import styles from './App.css';

function App() {
  return (
    <div>
      <Nav></Nav>
      <main>
       
        <Portfolio></Portfolio>
        <About></About>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
