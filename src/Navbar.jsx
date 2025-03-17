import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const onTransaction = () => {
    navigate("/");
  };

  const onHistory = () => {
    navigate("/TransactionView");
  };

  return (
    <div
      style={{
        background: "linear-gradient(135deg, #667eea, #764ba2)",
        padding: "15px 30px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        borderRadius: "8px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
      }}
    >
      <h2 style={{ color: "white", fontSize: "22px", fontWeight: "bold" }}>
        Personal Finance Visualization
      </h2>
      <div>
        <ul style={{ display: "flex", gap: "15px", listStyle: "none", margin: 0, padding: 0 }}>
          <li>
            <button
              onClick={onTransaction}
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.2)",
                color: "white",
                fontSize: "16px",
                padding: "8px 16px",
                borderRadius: "5px",
                border: "none",
                cursor: "pointer",
                transition: "0.3s",
              }}
              onMouseOver={(e) => (e.target.style.backgroundColor = "rgba(255, 255, 255, 0.4)")}
              onMouseOut={(e) => (e.target.style.backgroundColor = "rgba(255, 255, 255, 0.2)")}
            >
              Add Transaction
            </button>
          </li>
          <li>
            <button
              onClick={onHistory}
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.2)",
                color: "white",
                fontSize: "16px",
                padding: "8px 16px",
                borderRadius: "5px",
                border: "none",
                cursor: "pointer",
                transition: "0.3s",
              }}
              onMouseOver={(e) => (e.target.style.backgroundColor = "rgba(255, 255, 255, 0.4)")}
              onMouseOut={(e) => (e.target.style.backgroundColor = "rgba(255, 255, 255, 0.2)")}
            >
              Transaction History
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
