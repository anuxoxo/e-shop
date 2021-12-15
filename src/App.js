import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Payment from './components/Payment/Payment';
import Shipping from './components/Shipping/Shipping';

function App() {
  return (
    <div className="App">
      <Navbar />

      <main className="main__container">
        <div className="left__container">
          <Shipping />
        </div> 
        <div className="center__container">
          <Payment />
        </div>
        <div className="right__container">
          <Payment />

          {/* <Shipping /> */}
        </div>
      </main>

    </div>
  );
}

export default App;
