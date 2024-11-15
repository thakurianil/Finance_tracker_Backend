import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        unique: true,
        index: 1,
        required: true,
    },
    password:{
        type: String,
        required: true,
    },
    
},
{
    timestamps:true
}
)

export default mongoose.model("user", UserSchema);