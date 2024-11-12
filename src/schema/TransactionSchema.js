import mongoose from "mongoose";

const TransactionSchema = new mongoose.Schema({
    author :{
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: true,
    },
    type:{
        type: String,
        required: true,
    },
    amount:{
        type: String,
        required: true,

    },
    description:{
        type: String,
        required: true,
    },
    date: {
        type: Date,
        required: true,
      },
},
{
    timestamps:true
}
)

export default mongoose.model("transaction", TransactionSchema);