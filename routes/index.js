const { Router } = require("express");
const controllers = require("../controllers");
const router = Router();

router.get("/", (req, res) => res.send("this is the root for lamb dishes!"));

// it is the different method and post it in the same route.
router.post("/lambs", controllers.createLamb);
//you should populate lamb data before get all data with node lamb.js
router.get("/lambs", controllers.getAllRecipe);
router.get("/lambs/:id", controllers.getLambById);
router.put("/lambs/:id", controllers.updateLamb);
router.delete("/lambs:id", controllers.deleteLamb);
module.exports = router;
