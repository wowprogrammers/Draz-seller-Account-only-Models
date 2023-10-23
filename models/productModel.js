import mongoose from 'mongoose';


const productSchema = new mongoose.Schema({
    productName:{
        type:String,
        trim:true,
    },
    productCategories: {
        categories:[
            {
                type:String,
            }
        ]
    },
    productPhotos:{
        type:[String],
        required:[true,"Product Images are required"]
    },

    productVideoUrl:{
        type:String,
    }
})


const Product = mongoose.model('Product',productSchema);
export {Product};