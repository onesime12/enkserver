import mongoose from "mongoose";
const codeUniteSchema = mongoose.Schema({
  userName: {
    type: String,
    required: true,
  },
  prix: {
    type: Number,
    required: true,
  },
  code: {
    type: String,
    required: true,
  },
  isUsed: {
    type: Boolean,
    required: true,
    default: false,
  },
  numCompteur: {
    type: String,
    required: true,
  },
  operationId: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "Operation",
    required: true,
  },
  createdOn: {
    type: Date,
    default: Date.now(),
  },
});

const Code =mongoose.models.Code|| mongoose.model("Code", codeUniteSchema, "codes");
export default Code;
