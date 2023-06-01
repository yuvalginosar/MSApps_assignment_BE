import express from "express"
import photosController from "../controllers/photosController.js";
const router = express.Router()

router
.route("/sorted")
.get(photosController.getPhotosSorted)

router
  .route("/:category")
  .get(photosController.getPhotos)


  export default router;