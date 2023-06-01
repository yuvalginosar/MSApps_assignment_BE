import express from "express";
import photosRoutes from "./src/routes/photosRoutes.js"
import cors from "cors";
const app = express();



app.use("/photos", photosRoutes)
app.use(cors({ origin: ["http://localhost:3000"], credentials: true }));

app.listen(8000, () => {
    console.log("Listen on the port 8000...");
});