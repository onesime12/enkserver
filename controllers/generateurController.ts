import express from "express";

import Code from "../models/generateurModel";
import generateCode from "../utils/generateurCode";
const router = express.Router();
//middleware goes here
router.use(express.json());

router.post("/code", async (req, res) => {
  try {
    const codeUnite = await Code.create({
      userName: req.body.userName,
      prix: req.body.prix,
      code: generateCode(20),
      numCompteur: req.body.numCompteur,
      operationId: req.body.userId,
    });
    return res.status(200).json({
      status: true,
      message: "thainks for you fidelite",
      codeUnite,
    });
  } catch (error) {
    return res.status(400).json({
      status: false,
      message: error.message,
    });
  }
});

router.get("/code", async (req, res) => {
  try {
    const codeFound = await Code.find({});
    if (!codeFound) {
      return res.status(400).json({
        message: "not found...",
      });
    }
    return res.status(200).json({
      status: true,
      message: "success found code...",
      codeFound,
    });
  } catch (error) {
    return res.status(200).json(error);
  }
});

router.get("/code", async (req, res) => {
  try {
    const operationFound = await Code.find({
      numCompteur: req.body.compteur,
    });
    if (!operationFound) {
      return res.status(400).json({
        status: false,
        message: "not found...",
      });
    }
    return res.status(200).json({
      status: true,
      message: "success found code...",
      operationFound,
    });
  } catch (error) {
    return res.status(200).json(error);
  }
});

export default router;
