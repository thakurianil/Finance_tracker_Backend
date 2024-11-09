import TransactionSchema from "../schema/TransactionSchema"

export const addTransaction = (obj) => {
    return TransactionSchema.(obj).save();
}

export const getPostById = async (id) => {
    return await TransactionSchema.findById(id).populate("userId");
};