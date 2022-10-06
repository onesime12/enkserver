import {
  createAbonner,
  getAbonnes,
  modifierAbonner,
} from "../../controllers/abonneController";

export default async function handler(req, res) {
  if (req.method == "PUT") {
    const ab = await modifierAbonner(req.query.abonne, req.body);
    return res.status(201).json(ab);
  }
}
