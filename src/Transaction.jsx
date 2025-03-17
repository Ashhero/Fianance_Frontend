import React, { useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";

function Transaction() {
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleTransaction = async (e) => {
    e.preventDefault();
    if (!amount || !date || !description) {
      setError("All fields are required!");
      return;
    }

    setError("");
    try {
      await axios.post("https://finance-backend-qa46.onrender.com/add-transaction", {
        amount,
        date,
        description,
      });
      setMessage("Transaction added successfully!");
      setAmount("");
      setDate("");
      setDescription("");

      setTimeout(() => setMessage(""), 3000);
    // eslint-disable-next-line no-unused-vars
    } catch (error) {
      setError("Failed to add transaction.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4">
      <Navbar />
      <div
        style={{
          backgroundColor: "white",
          padding: "30px",
          borderRadius: "10px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          width: "100%",
          maxWidth: "400px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          
        }}
      >
        <h2 style={{ textAlign: "center", marginBottom: "20px", color: "#333" }}>
          Add Transaction
        </h2>
        <form onSubmit={handleTransaction} style={{ width: "100%" }}>
          <input
            type="number"
            placeholder="Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            style={{
              width: "100%",
              padding: "10px",
              marginBottom: "10px",
              borderRadius: "5px",
              border: "1px solid #ccc",
            }}
          />
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            style={{
              width: "100%",
              padding: "10px",
              marginBottom: "10px",
              borderRadius: "5px",
              border: "1px solid #ccc",
            }}
          />
          <input
            type="text"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            style={{
              width: "100%",
              padding: "10px",
              marginBottom: "10px",
              borderRadius: "5px",
              border: "1px solid #ccc",
            }}
          />
          <button
            type="submit"
            style={{
              width: "100%",
              padding: "10px",
              backgroundColor: "#667eea",
              color: "white",
              fontSize: "16px",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              transition: "0.3s",
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#5a67d8")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "#667eea")}
          >
            Submit
          </button>
          {error && (
            <p style={{ color: "red", textAlign: "center", marginTop: "10px" }}>
              {error}
            </p>
          )}
          {message && (
            <p
              style={{ color: "green", textAlign: "center", marginTop: "10px" }}
            >
              {message}
            </p>
          )}
        </form>
      </div>
    </div>
  );
}

export default Transaction;
