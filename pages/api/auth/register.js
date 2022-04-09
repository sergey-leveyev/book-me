import nc from "next-connect";
import dbConnect from "../../../config/dbConnect";

import { registerUser } from "../../../controllers/authControllers";

import onError from "../../../middlewares/error";

const hendler = nc({ onError });

dbConnect();

hendler.post(registerUser);

export default hendler;
