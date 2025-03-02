import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function DiscountCalculator() {
  const [amount, setAmount] = useState('');
  const [discount, setDiscount] = useState('');
  const [result, setResult] = useState(null);

  const calculateDiscount = () => {
    const originalAmount = parseFloat(amount);
    const discountPercentage = parseFloat(discount);

    if (isNaN(originalAmount) || isNaN(discountPercentage)) {
      alert("Please enter valid numbers for both fields.");
      return;
    }

    const discountedPrice = originalAmount - (originalAmount * (discountPercentage / 100));
    setResult(discountedPrice.toFixed(2));
  };

  return (

    
    <div className="container-one">
      <h2 className="header">Discount Calculator</h2>
      
      <div className="input-container">
        <label className="label">Enter Amount :</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Amount"
          className="input"
        />
      </div>

      <div className="input-container">
        <label className="label">Enter Discount(%) :</label>
        <input
          type="number"
          value={discount}
          onChange={(e) => setDiscount(e.target.value)}
          placeholder="Discount %"
          className="input"
        />
      </div>

      <button onClick={calculateDiscount} className="button">
        Calculate
      </button>

      <div className="result-container">
        {result !== null && (
          <h3 className="result-text">Discounted Price: ${result}</h3>
        )}
      </div>

      <img className='image-container' src="https://www.pngrepo.com/download/110591/calculator.png" alt="" />
    </div>
  );
}

export default DiscountCalculator;
