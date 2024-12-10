const express = require("express");
const submitContoller = require("../controller/submit-controller");

const apiRouter = express.Router();

apiRouter.post("/submission", submitContoller);

module.exports = apiRouter;
