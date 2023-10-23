import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
    // Who is getting review
    sellerId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Seller"
    },
    // Who is sharing review
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    review:{
        type:String,
        trim:true
    }
})

const Review = mongoose.model('Review',reviewSchema);
export {Review};