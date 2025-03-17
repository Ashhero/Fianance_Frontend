import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Transaction from './Transaction';
import History from './TransactionHistory'; // Import the Welcome component

const App = () => {
  return (
    <div>
      <Router>
        <Routes> 
            <Route path="/" element={<Transaction />} />
          <Route path="/Transactionview" element={<History />} /> {/* New route for the Welcome component */}
         
          {/* Other routes can be added here */}
        </Routes>
      </Router>
    </div>
  );
};

export default App;