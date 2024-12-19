import mongoose from "mongoose";


const titleSchema = new mongoose.Schema({
    title : {
        type : String,
        required : true,
        unique : true
    },
    description : {
        type : String,
        lowercase : true
    },
    status : {
        type : String,
        // required : true,
        enum: ['pending', 'in-progress', 'completed']
    }
},{
    timestamps : true
})

export default mongoose.model("Title",titleSchema)