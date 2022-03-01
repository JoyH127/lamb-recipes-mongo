const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Lamb = new Schema(
  {
    dish_title: { type: String, required: true },
    origin_country: { type: String, required: true, ref: "countries" },
    ingredients: { type: String, required: true },
    img: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("lambs", Lamb);
