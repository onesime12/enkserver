// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import {getAbonnes, postAbonne } from "../../controllers/abonneController";

import connectMongo from "../../utils/mongoConnection";
connectMongo();

export default async function handler(req, res) {
  if (req.method == "POST") {
    const abonnePosted = await postAbonne(req.body);
    return res.status(201).json(abonnePosted);
  } else {
    const abonneGetten = await getAbonnes();
    console.log(abonneGetten);
    return res.status(200).json(abonneGetten);

  }
}
