import { getCode, postCode } from "../../controllers/codeController";
import connectMongo from "../../utils/mongoConnection";
connectMongo();
export default async function handlerCode(req,res) {
    if (req.method=="POST") {
        const codePosted = await postCode(req.body);
        return res.status(201).json(codePosted);
    }else {
        const codeGetten = await getCode();
        return res.status(200).json(codeGetten);
    }
}