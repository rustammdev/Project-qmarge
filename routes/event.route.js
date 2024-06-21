import express  from "express";
import eventController from "../controllers/event.controller.js"

const route = express.Router()

//@desc Register user
//@route POST /api/users/register
//@access private
route.post('/create', eventController);

export default route;