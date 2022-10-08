import {putAbonne} from "../../controllers/abonneController";

export default async function handler(req, res) {
  if (req.method == "PUT") {
    const abonneUpdated = await putAbonne(req.query.compteur, req.body);
    return res.status(201).json(abonneUpdated);
  }
}
