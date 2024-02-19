import express from "express";
import cors from "cors"
import dotenv from "dotenv"
import connectDB from "./db/DBConnection.js";
import { upload } from "./middleware/multer.middleware.js"
import { deleteMedicine, getMedicine, uploadMedicine } from "./controllers/medicineupdate.controllers.js";
dotenv.config();
connectDB()
    .then(() => {
        const app = express();
        app.use(cors({
            origin: ['http://localhost:5173']
        }))
        app.use(express.static("public"));
        app.use(express.json());
        app.post("/v1/api/uploadmedicine", upload.single("image"), uploadMedicine);
        app.get("/v1/api/getmedicines", getMedicine)
        app.post("/v1/api/deletemedicine/:id", deleteMedicine)
        app.listen(process.env.PORT || 8000, () => {
            console.log(` ⚙️  Server is running at port : ${process.env.PORT}`);
        })
    })
    .catch((error) => { console.log("MongoDB Connection Failed !! ", error); })