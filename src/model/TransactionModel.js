import Transaction from "../schema/TransactionSchema.js";

export const addTransaction = async (transaction) => {
  const newTransaction = new Transaction(transaction);
  return await newTransaction.save();
};

export const getTransactions = async (id) => {
  return await Transaction.find({ author: id }).populate("author");
};
