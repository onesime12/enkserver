//init code
import { Schema, model, models } from "mongoose";

const abonneSchema = new Schema({
  aboName: {
    type: String,
    required: true,
  },
  compteurNumber: {
    type: String,
    required: true,
    unique: true,
  },
  quartier: {
    type: String,
    require: true,
  },
  cellule: {
    type: String,
    required: true,
  },
  numParcelle: {
    type: Number,
    required: true,
  },
  typeAbonnement: {
    type: String,
    require: true,
  },
  createdOn: {
    type: Date,
    default: Date.now(),
  },
});

const Abonne = models.Abonne || model("Abonne", abonneSchema, "abonnes");
export default Abonne;
