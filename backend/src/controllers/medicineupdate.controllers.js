import { uploadOnCloudinary } from "../Cloudinary.js";
import { Medicine } from "../models/medicine.models.js";
import { ApiResponse } from "../utils/ApiResponse.js";
const uploadMedicine = async(req,res)=>{
    const {name,description,offer,price,otp} = req.body;
    const imageLocalPath = req.file?.path
    if(name==='' || description==='' || offer==='' || price==='' || otp===''){
        return res.status(404).json(new ApiResponse(404,null,"All Fields are Mandatory!!"))
    }
    if(!imageLocalPath){
        return res.status(404).json(new ApiResponse(404,null,"Medicine Image not found!!"))    
    }
    console.log("Local Path is:",imageLocalPath)
    if(otp!="8948"){
        return res.status(404).json(new ApiResponse(404,null,"Given Admin Code is not Valid !!"))
    }
    const image=await uploadOnCloudinary(imageLocalPath);
    if(!image){
        return res.status(404).json(new ApiResponse(404,null,"Medicine Image couldn't Upload on cloud Successfully!!"))
    }
    console.log("Image is :",image)
    const Medicinee = await Medicine.create({
        name:name,
        description:description,
        offer:offer,
        price:price,
        image:image.url
    })
    const medicinee = await Medicine.findById(Medicinee._id);
    if(!medicinee){
        return res.status(404).json(new ApiResponse(404,null,"Something Went Wrong While Uploading Medicine!!"))
    }

    res.status(201).json(new ApiResponse(200,medicinee,"Medicine Uploaded Successfully!"))
}
const getMedicine = async(req,res)=>{
    try {
        const allMedicines = await Medicine.find();
        res.status(200).json(new ApiResponse(200, allMedicines, "Medicines retrieved successfully!!"));
      } catch (error) {
        console.error(error);
        res.status(500).json(new ApiResponse(500, null, "Internal Server Error While Retrieving Medicines!! "));
      }
}
const deleteMedicine = async(req,res)=>{
    try {
        const id = req.params.id;
        console.log("Id got:",id);
        const {adminCode} =req.body;
        console.log("Code got:",adminCode);
        if(adminCode!="8948"){
            return res.status(404).json(new ApiResponse(404,null,"Admin Code is not Valid !!"))
        }

        const response = await Medicine.findByIdAndDelete(id);
        // console.log("Response is:",response);
        res.status(200).json(new ApiResponse(200, "Got", "Medicine Deleted Successfully!!"));
    } catch (error) {
        console.error("Catch with error:",error);
        res.status(500).json(new ApiResponse(500, null, "Internal Server Error While Deleting Medicine!! "));
    }
}
export {uploadMedicine,getMedicine , deleteMedicine}