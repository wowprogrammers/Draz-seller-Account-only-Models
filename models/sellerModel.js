import mongoose, { mongo } from 'mongoose';
import validator from 'validator';

const sellerSchema = new mongoose.Schema({
phoneNumber:{
    type:String,
    trim:true,
    required:[true,"Phone Number is required"],
    validate:{
        // Custom validator
        validator:(inputValue) => {
            //  To validate the phone formate
            const reqPhoneFormate = /^((\(0)?)(3)([0-9]{9})$/;
            return inputValue.match(reqPhoneFormate);

        },
        message:"Please Enter a valid Phone number"
    }
},
email:{
    type:String,
    trim:true,
    lowercase:true,
    // Here using node.js package(validator) for email validation
    validate:[validator.isEmail,"Please Enter a valid email Address"],
    // AS in daraz By default, It is empty
    default:""
},
password:{
    type:String,
    required:true,
    validate: {
        // Custom validator
        validator : (inputValue) => {
            // Min length should be 8
            // at least one uppercase
            // at least one lower case
            // at least one digit
            // at least one symbol
            const reqpasswordFormate = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#$%^&+=!]).{8,}$/;;
            
            return reqpasswordFormate.match(inputValue);
        },
        message:"Invalid Password! Please follow instructions..."
    }
},
confirmPassword:{
    type:String,
    required:[true,"Confirm Password is required"],
    validate:{
        validator:function(inputValue){
            return inputValue === this.password
        },
        message:"Password and Cofirm Password should be same!"
    }
},
sellerOTP:{
    type:Number
},
OTPExpiresTime:Date,
storeName:{
    type:String,
    trim:true,
},
Address:{

        businessAddress:{
            addressName:{
                type:String,
                trim:true
            },
            province:{
                type:String,
                trim:true
            }
        },
        wareHouseAddress:{
            addressName:{
                type:String,
                trim:true
            },
            province:{
                type:String,
                trim:true
            }
        },
        returnAddress:{
            addressName:{
                type:String,
                trim:true
            },
            province:{
                type:String,
                trim:true
            }
        }


},
sellerType:{
    type:String,
    default:"individual",
    // Here we are specifying only these two are the possible value can come
    enum:['corporate','individual']
},
IdCardFront:{
    type:String,
    trim:true

},
IdCardBack:{
    type:String,
    trim:true

},
idCardName:{
    type:String,
    trim:true

},
idCardNumber:{
    type:String,
    trim:true
},
totalBalance:{
    type:Number,
},
companyName:{
    type:String,
    trim:true
},
businessRegistrationNumber:Number,
registrationDocument:{
    type:String
},
reviewIds:{
    // Referencing to 'Review' Model
   reviews:[
        {
            review:{
                type:mongoose.Schema.Types.ObjectId,
                ref:'Review'
            }
        }
    ]
    
},
//  One seller can add/have multiple voucher, thats why it is an array of all the vouchers which seller adds
voucherIds:{
    
            vouchers:[
            {
                voucher:{
                    type:mongoose.Schema.Types.ObjectId,
                    ref:"Voucher"
                }
               
            }
        ]   
}
})




const Seller = mongoose.model('Seller',sellerSchema);
export {Seller};
