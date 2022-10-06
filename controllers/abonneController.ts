const router = require("express").Router();
const bodyParser = require("body-parser");
const abonne = require("../models/abonneModele");

//middleware goes here
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

//endPoint for posting Abonné
router.post("/abonne", async (req, res) => {
  try {
    const newAbonne = await abonne.create({
      aboName: req.body.abonnement,
      compteurNumber: req.body.compteur,
      quartier: req.body.quartier,
      cellule: req.body.cellule,
      numParcelle: req.body.parcelle,
      typeAbonnement: req.body.type,
    });
    return res.json(newAbonne);
  } catch (error) {
    return res.json(error);
  }
});

//Api for getting Abonné
router.get("/abonne", async (req, res) => {
  try {
    const abonnesFound = await abonne.find({});
    if (!abonnesFound) {
      res.json({
        status: false,
        message: "pas des abonnés Maintenant...",
      });
    }
    return res.status(200).json(abonnesFound);
  } catch (error) {
    return res.json(error);
  }
});

router.put("/abonne", async () => {
  try {
    const abonneFind = await abonne.findOneAndUpdate(
      {
        compteurNumber: req.body.compteur,
      },
      {
        aboName: req.body.abonnement,
        compteurNumber: req.body.compteur,
        quartier: req.body.quartier,
        cellule: req.body.cellule,
        numParcelle: req.body.parcelle,
        typeAbonnement: req.body.type,
      },
      { new: true }
    );
    if (!abonneFind) {
      return res.json({
        status: false,
        message: "abonné not updated...",
      });
    }
    return res.json(abonneFind);
  } catch (error) {
    return res.status(400).json(error);
  }
});

module.exports = router;
