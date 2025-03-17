# Personal Finance Visualisation

## Overview
Finance Tracker is a web application that helps users track their transactions, visualize their expenses, and manage their financial records. It provides features to add, update, and delete transactions, along with a bar chart visualization of monthly expenses.

## Features
- 📌 View transaction history
- ➕ Add new transactions
- ✏️ Edit existing transactions
- ❌ Delete transactions
- 📊 Monthly expense visualization using a bar chart

## Tech Stack
- **Frontend:** React, Axios, Recharts
- **Backend:** Node.js, Express.js
- **Database:** MongoDB

## Installation

### Prerequisites
Ensure you have the following installed:
- Node.js & npm
- Git

### Clone the Repository
```sh
git clone https://github.com/yourusername/finance-tracker.git
cd finance-tracker
```

### Install Dependencies
```sh
npm install
```

### Start the Application
```sh
npm start
```

The application will run on `[http://localhost:3000/](https://finance-backend-qa46.onrender.com)`

## API Endpoints
### **Transactions API**
- **GET** `/get-all-transaction` - Fetch all transactions
- **POST** `/add-transaction` - Add a new transaction
- **PUT** `/update-transaction/:id` - Update an existing transaction
- **DELETE** `/delete-transaction/:id` - Delete a transaction

## Usage
1. Open the application and view all transactions.
2. Add new transactions using the input fields.
3. Edit any existing transaction by clicking the **Edit** button.
4. Delete transactions as needed.
5. View your **Monthly Expenses Bar Chart** for financial insights.

## Future Enhancements
- 📌 Add filtering and sorting options
- 📌 Implement user authentication
- 📌 Export transaction data as CSV/PDF

## Contact
For any queries or contributions, reach out to **akashdevadiga919@gmail.com**.

