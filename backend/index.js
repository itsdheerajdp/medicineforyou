import express from "express";
import cors from "cors"
import dotenv from "dotenv"
import connectDB from "./src/db/DBConnection.js";
import { upload } from "./src/middleware/multer.middleware.js"
import { deleteMedicine, getMedicine, uploadMedicine } from "./src/controllers/medicineupdate.controllers.js";
dotenv.config();
connectDB()
    .then(() => {
        const app = express();
        app.use(cors({
            origin: "*",
            credentials: true,
            methods: ["GET", "POST", "PUT", "DELETE"]
        }))
        app.options("", cors({
            origin: "*",
            credentials: true,
            methods: ["GET", "POST", "PUT", "DELETE"]
        }))
        app.use(express.static("tmp"));
        app.use(express.json());
        app.post("/v1/api/uploadmedicine", upload.single("image"), uploadMedicine);
        app.get("/v1/api/getmedicines", getMedicine)
        app.post("/v1/api/deletemedicine/:id", deleteMedicine)
        app.listen(process.env.PORT || 8000, () => {
            console.log(` ⚙️  Server is running at port : ${process.env.PORT}`);
        })
    })
    .catch((error) => { console.log("MongoDB Connection Failed !! ", error); })