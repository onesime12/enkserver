// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { createAbonner, getAbonnes } from "../../controllers/abonneController";
import connectMongo from "../../utils/mongoConnection";
connectMongo();
export default async function handler(req, res) {
  if (req.method == "POST") {
    const ab = await createAbonner(req.body);
    return res.status(201).json(ab);
  } else {
    console.log("*********");

    const abs = await getAbonnes();
    return res.status(200).json(abs);
  }
}
