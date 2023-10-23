import mongoose from "mongoose";


const voucherSchema = new mongoose.Schema({
    voucherType:{
        type:String,
        trim:true,
    },
    voucherName:{
        type:String
    },
    discountType:{
        type:String
    },
    discountValue:{
        type:Number
    },
    orderValue:{
        type:Number
    },
    startDate:Date,
    endDate:Date,
    TotalVoucherToBeIssued:{
        type:Number
    },
    usageLimitPerCustomer:{
        type:Number
    },
    ApplyTo:{
        type:String,
        default:"Whole Store",
        enum:["Whole Store","Products"]
    },
    // In case seller wants to select specific products
    productsIds:{
        products:[
            {
                product:mongoose.Schema.Types.ObjectId,
                type:"Product"
            }
        ]

    }

})


const Voucher = mongoose.model('Voucher',voucherSchema);
export {Voucher};