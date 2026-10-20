const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
    title:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    image:{
        filename:{
            type:String,
            default:"listingimage"
        },
        url:{
            type:String,
            default:"https://share.google/YawACuxVZFFObh8Q3"
        }
    },
    price:Number,
    location:String,
    country:String,
});

const listing = mongoose.model("listing",listingSchema);
module.exports = listing;