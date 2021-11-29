var express = require('express');
var router = express.Router();

const controller = require("../controllers/actorsController")


router.get("/actors",controller.list)
router.get("/actors/detail/:id",controller.detail)

module.exports = router