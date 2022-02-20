import nc from "next-connect";
import dbConnect from "../../../config/dbConnect";

import { allRooms, newRoom } from "../../../controllers/roomControllers";

import onError from "../../../middlewares/error";

const hendler = nc({ onError });

dbConnect();

hendler.get(allRooms);

hendler.post(newRoom);

export default hendler;
