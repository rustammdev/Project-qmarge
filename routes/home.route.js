import express from "express";
import homeController from "../controllers/home.controller.js";

const router = express.Router();

// @desc Home
// @route GET '/'
// @access Public
router.get("/", homeController);

// // @desc Home
// // @route POST
// // @access Public
// router.post("/", (req, res) => {
//   res.send(req.body);
// });

export default router;
