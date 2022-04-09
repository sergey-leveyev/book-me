import nc from "next-connect";
import dbConnect from "../../../config/dbConnect";
import { login } from "../../../controllers/authControllers";

const handler = nc();

dbConnect();

handler.post(login);

export default handler;

