import mongoose,{Schema} from "mongoose";
const MedicineSchema =new Schema({
name:{
    type:String,
    required:true
},
description:{
    type:String,
    required:true
},
offer:{
    type:String,
    required:true
},
price:{
    type:String,
    required:true
},
image:{
    type:String,
    required:true
}
},{timestamps:true})
export const Medicine = mongoose.model("Medicine",MedicineSchema);