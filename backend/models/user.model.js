import mongoose from "mongoose";
const Schema = mongoose.Schema;

const userSchema = new Schema(
    {
    fullName: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    },
    gender: {
        type: String,
        required: true
    },
    profilePic: {
        type: String,
        default: ""
    },
},
//createdat, UpdatedAt= member since  <created at>
{
    timestamps:true
}
);

const User = mongoose.model("User", userSchema);

export default User;
