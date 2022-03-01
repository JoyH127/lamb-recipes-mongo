const Lamb = require("../models/lamb");

const createLamb = async (req, res) => {
  try {
    const lamb = await new Lamb(req.body);
    await lamb.save();
    return res.status(201).json({
      lamb,
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const getAllRecipe = async (req, res) => {
  try {
    const lambs = await Lamb.find();
    return res.status(200).json({ lambs });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const getLambById = async (req, res) => {
  try {
    const { id } = req.params;
    const lamb = await Lamb.findById(id);
    if (lamb) {
      return res.status(200).json({ lamb });
    }
    return res.status(404).send("Plant not found");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};
const updateLamb = (req, res) => {
  try {
    const { id } = req.params;
    Lamb.findByIdAndUpdate(id, req.body, { new: true }, (err, lamb) => {
      if (err !== null) {
        console.log(err, "error");
        res.status(404).send(err.message);
      } else {
        console.log(lamb);
        res.json(lamb);
      }
    });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const deleteLamb = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Lamb.findByIdAndDelete(id);
    if (deleted) {
      return res.status(200).send("Lamb recipe deleted");
    }
    throw new Error("Lamb recipe not found");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = {
  createLamb,
  getAllRecipe,
  getLambById,
  updateLamb,
  deleteLamb,
};
