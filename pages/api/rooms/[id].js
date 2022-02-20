import nc from "next-connect";
import dbConnect from "../../../config/dbConnect";

import {
  getSingleRoom,
  updateRoom,
  deleteRoom,
} from "../../../controllers/roomControllers";

import onError from "../../../middlewares/error";

const hendler = nc({ onError });

dbConnect();

hendler.get(getSingleRoom);

hendler.put(updateRoom);

hendler.delete(deleteRoom);

export default hendler;
