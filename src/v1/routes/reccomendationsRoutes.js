const express = require("express");
const recommendationController = require("../../controllers/recommendationController");

const router = express.Router();

router.get("/", recommendationController.getAllRecommendations);

router.get("/detailed", recommendationController.getEntityDetail);

module.exports = router;