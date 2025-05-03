import React, { useState } from 'react';
import './index.css';

function App() {
  const [balance, setBalance] = useState(1150);

  const handleWithdraw = (amount) => {
    if (balance >= amount) {
      setBalance(balance - amount);
    } else {
      alert('Insufficient balance!');
    }
  };

  return (
    <div className="page">
      <div className="card">
        
      <div className="container1">
        <div className="profile-circle">S</div>

       
        <h2 className="name">Sony</h2>

        </div>
        <div className="container2">
        <p className="balance-text">Your Balance</p>

        
        <h1 className="balance-amount">
          {balance} <span className="rupee-text">In Rupees</span>
          
        </h1>

        </div>

        <div className="container3">
        <div className="withdraw-title">Withdraw</div>

       
        <div className="choose-sum-text">CHOOSE SUM (IN RUPEES)</div>

        </div>
        <div className="button-container">
          <button onClick={() => handleWithdraw(50)}>50</button>
          <button onClick={() => handleWithdraw(100)}>100</button>
          <button onClick={() => handleWithdraw(200)}>200</button>
          <button onClick={() => handleWithdraw(500)}>500</button>
        </div>

      </div>
    </div>
  );
}

export default App;