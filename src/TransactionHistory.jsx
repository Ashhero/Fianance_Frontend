import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer,
} from "recharts";

function TransactionHistory() {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [editTransaction, setEditTransaction] = useState(null);

  useEffect(() => {
    fetchTransactions();
  }, []);

  const fetchTransactions = async () => {
    try {
      const response = await axios.get("https://finance-backend-qa46.onrender.com/get-all-transaction");
      setTransactions(response.data.Transactions);
      setLoading(false);
    // eslint-disable-next-line no-unused-vars
    } catch (error) {
      setError("Failed to load transactions.");
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://finance-backend-qa46.onrender.com/delete-transaction/${id}`);
      setTransactions(transactions.filter((transaction) => transaction._id !== id));
    // eslint-disable-next-line no-unused-vars
    } catch (error) {
      setError("Failed to delete transaction.");
    }
  };

  const handleEdit = (transaction) => {
    setEditTransaction(transaction);
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    if (!editTransaction.amount || !editTransaction.date || !editTransaction.description) {
      alert("All fields are required!");
      return;
    }

    try {
      await axios.put(`https://finance-backend-qa46.onrender.com/update-transaction/${editTransaction._id}`, {
        amount: editTransaction.amount,
        date: editTransaction.date,
        description: editTransaction.description,
      });

      setTransactions(transactions.map((txn) =>
        txn._id === editTransaction._id ? { ...txn, ...editTransaction } : txn
      ));

      setEditTransaction(null);
    // eslint-disable-next-line no-unused-vars
    } catch (error) {
      setError("Failed to update transaction.");
    }
  };

  return (
    <div className="container mx-auto mt-10 px-4">
      <Navbar />
      <h2 className="text-2xl font-bold mb-4 text-center">Transaction History</h2>

      {loading && <p className="text-center">Loading transactions...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}
      {!loading && !error && transactions.length === 0 && <p className="text-center">No transactions found.</p>}

      {!loading && transactions.length > 0 && (
        <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", backgroundColor: "white", borderCollapse: "collapse", border: "1px solid gray" }}>
            <thead>
              <tr style={{ backgroundColor: "#f2f2f2" }}>
                <th style={{ padding: "10px", border: "1px solid gray" }}>Amount</th>
                <th style={{ padding: "10px", border: "1px solid gray" }}>Date</th>
                <th style={{ padding: "10px", border: "1px solid gray" }}>Description</th>
                <th style={{ padding: "10px", border: "1px solid gray" }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((transaction) => (
                <tr key={transaction._id} style={{ textAlign: "center", border: "1px solid gray" }}>
                  <td style={{ padding: "10px", border: "1px solid gray" }}>₹{transaction.amount}</td>
                  <td style={{ padding: "10px", border: "1px solid gray" }}>
                    {new Date(transaction.date).toLocaleDateString()}
                  </td>
                  <td style={{ padding: "10px", border: "1px solid gray" }}>{transaction.description}</td>
                  <td style={{ padding: "10px", border: "1px solid gray" }}>
                    <button
                      onClick={() => handleEdit(transaction)}
                      style={{
                        marginRight: "10px",
                        padding: "5px 10px",
                        backgroundColor: "#4CAF50",
                        color: "white",
                        border: "none",
                        cursor: "pointer",
                        borderRadius: "5px",
                      }}
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(transaction._id)}
                      style={{
                        padding: "5px 10px",
                        backgroundColor: "#e74c3c",
                        color: "white",
                        border: "none",
                        cursor: "pointer",
                        borderRadius: "5px",
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {editTransaction && (
        <div className="edit-form" style={{ marginTop: "20px", padding: "20px", backgroundColor: "white", borderRadius: "10px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", width: "100%", maxWidth: "400px", margin: "auto" }}>
          <h3 className="text-center">Edit Transaction</h3>
          <form onSubmit={handleUpdate}>
            <input
              type="number"
              placeholder="Amount"
              value={editTransaction.amount}
              onChange={(e) => setEditTransaction({ ...editTransaction, amount: e.target.value })}
              style={{ width: "100%", padding: "10px", marginBottom: "10px", borderRadius: "5px", border: "1px solid #ccc" }}
            />
            <input
              type="date"
              value={editTransaction.date}
              onChange={(e) => setEditTransaction({ ...editTransaction, date: e.target.value })}
              style={{ width: "100%", padding: "10px", marginBottom: "10px", borderRadius: "5px", border: "1px solid #ccc" }}
            />
            <input
              type="text"
              placeholder="Description"
              value={editTransaction.description}
              onChange={(e) => setEditTransaction({ ...editTransaction, description: e.target.value })}
              style={{ width: "100%", padding: "10px", marginBottom: "10px", borderRadius: "5px", border: "1px solid #ccc" }}
            />
            <button
              type="submit"
              style={{ width: "100%", padding: "10px", backgroundColor: "#667eea", color: "white", fontSize: "16px", border: "none", borderRadius: "5px", cursor: "pointer", transition: "0.3s" }}
              onMouseOver={(e) => (e.target.style.backgroundColor = "#5a67d8")}
              onMouseOut={(e) => (e.target.style.backgroundColor = "#667eea")}
            >
              Update
            </button>
            <button
              onClick={() => setEditTransaction(null)}
              style={{ width: "100%", padding: "10px", marginTop: "10px", backgroundColor: "#e74c3c", color: "white", fontSize: "16px", border: "none", borderRadius: "5px", cursor: "pointer", transition: "0.3s" }}
            >
              Cancel
            </button>
          </form>
        </div>
      )}
        {!loading && transactions.length > 0 && (
        <div style={{ marginTop: "40px" }}>
          <h3 style={{ textAlign: "center", fontSize: "20px", fontWeight: "bold", marginBottom: "20px" }}>
            Finance Tracking Chart
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={transactions} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" tickFormatter={(tick) => new Date(tick).toLocaleDateString()} />
              <YAxis />
              <Tooltip />
              <Bar dataKey="amount" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      )}
    </div>
  );
}

export default TransactionHistory;
