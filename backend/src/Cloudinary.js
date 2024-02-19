import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
    cloud_name: "dheerajbackend",
    api_key: "994218117875869",
    api_secret: "AXBes7pm6IEcl6YXni-RT1B3ohU"
});
const uploadOnCloudinary = async(fileBuffer) => {
    try {
        if (!fileBuffer) return null;
        
        return new Promise((resolve, reject) => {
            cloudinary.uploader.upload_stream({
                resource_type: "auto"
            }, (error, result) => {
                if (error) {
                    console.error("Error uploading to Cloudinary:", error);
                    reject(error);
                } else {
                    console.log("Upload successful. Cloudinary response:", result);
                    resolve(result.secure_url); // Resolve with the secure URL of the uploaded image
                }
            }).end(fileBuffer);
        });
    } catch (error) {
        console.log("ERROR:", error);
        return null;
    }
}



export { uploadOnCloudinary };