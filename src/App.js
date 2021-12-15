import React from 'react';
import './App.css';
import CartList from './components/Cart/CartList';
import FooterNav from './components/FooterNav/FooterNav';
import Navbar from './components/Navbar/Navbar';
import Payment from './components/Payment/Payment';
import Shipping from './components/Shipping/Shipping';

import UserContextProvider from "./context/userContext";


function App() {
  return (
    <div className="App">
      <UserContextProvider>
        <nav>
          <Navbar />
        </nav>
        <main className="main__container">
          <div className="left__container">
            <Shipping />
          </div>
          <div className="center__container">
            <Payment />
          </div>
          <div className="right__container">
            <CartList />
          </div>
        </main>
        <footer>
          <FooterNav />
        </footer>
      </UserContextProvider>
    </div>
  );
}

export default App;
