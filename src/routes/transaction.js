import express from "express";
import { comparePassword, hashPassword } from "../utils/bcrypt.js";

import jwt from "jsonwebtoken";
import { addTransaction, getTransactions } from "../model/TransactionModel.js";
import { authenticateJWT } from "../utils/jwt.js";

export const TransactionRouter = express.Router();

TransactionRouter.post("/", authenticateJWT, async (req, res) => {
  try {
    const { type, amount, description, date } = req.body;
    const { user } = req;
    console.log(200, user);

    // Create transaction object with userId

    const newTransaction = await addTransaction({
      author: user.userId, // Assumes user is added to the request, typically via middleware
      type,
      amount,
      description,
      date,
    });

    // Send response
    res.status(201).json({
      status: "success",
      message: "Transaction Added Successfully!",
      transaction: newTransaction,
    });
  } catch (error) {
    console.error("Error adding transaction:", error);
    res.status(500).json({
      status: "error",
      message: "An error occurred while adding the transaction.",
    });
  }
});

TransactionRouter.get("/", authenticateJWT, async (req, res) => {
    try {
      const { user } = req;  // 'user' will be available if the JWT is valid
      console.log("User:", user); // For debugging
  
      // Pass the 'userId' from the decoded JWT to the 'getTransactions' function
      const transactions = await getTransactions(user.userId);
  
      // Logging the transactions for debugging
      console.log("Transactions:", transactions);
  
      res.json({
        status: "success",
        message: "Transactions fetched successfully",
        transactions,
      });
    } catch (error) {
      console.error("Error fetching transactions:", error);
  
      res.status(500).json({
        status: "error",
        message: "Error fetching transactions",
      });
    }
  });
  